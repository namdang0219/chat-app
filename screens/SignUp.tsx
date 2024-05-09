import {
	View,
	Text,
	TouchableWithoutFeedback,
	Keyboard,
	KeyboardAvoidingView,
	Platform,
	StyleSheet,
	Alert,
} from "react-native";
import React, { useEffect, useState } from "react";
import ButtonLarge from "../components/buttons/ButtonLarge";
import Input from "../components/inputs/Input";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { Controller, useForm } from "react-hook-form";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase-config";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { collection, doc, getDoc, setDoc } from "firebase/firestore";

const SignUp = () => {
	const insets = useSafeAreaInsets();
	const [keyboardStatus, setKeyboardStatus] = useState(false);

	const signUpSchema = Yup.object({
		email: Yup.string()
			.email("Please input your correct email address")
			.min(5, "Your email must be over 5 charactors")
			.max(25, "Your email could not over 25 charactors"),
		password: Yup.string()
			.min(5, "Your password must be over 5 charactors")
			.max(25, "Your password could not over 25 charactors"),
	});

	const {
		control,
		handleSubmit,
		formState: { errors, isValid, isSubmitting },
	} = useForm({
		defaultValues: {
			email: "",
			password: "",
		},
		resolver: yupResolver(signUpSchema),
	});
	const extendData = {
		avatar: "",
		contacts: [],
		chats: [],
		lastActive: "",
		stories: [],
		firstName: "",
		lastName: "",
	};
	const { navigate } = useNavigation<any>();

	useEffect(() => {
		const showSubscription = Keyboard.addListener(
			"keyboardWillShow",
			() => {
				setKeyboardStatus(true);
			}
		);
		const hideSubscription = Keyboard.addListener(
			"keyboardWillHide",
			() => {
				setKeyboardStatus(false);
			}
		);

		return () => {
			showSubscription.remove();
			hideSubscription.remove();
		};
	}, []);

	const handleSignup = async (data: any) => {
		if (!isValid) return;
		try {
			await createUserWithEmailAndPassword(
				auth,
				data.email,
				data.password
			);
			if (auth.currentUser) {
				await setDoc(
					doc(collection(db, "users"), auth.currentUser.uid),
					{
						uid: auth.currentUser.uid,
						...data,
						...extendData,
					}
				);
			}
			navigate("SetupProfile");
		} catch (error: any) {
			console.log(error);
			if (
				error.message === "Firebase: Error (auth/email-already-in-use)."
			) {
				Alert.alert("Email already in use");
			}
		}
	};

	return (
		<KeyboardAvoidingView
			behavior={Platform.OS === "ios" ? "padding" : "height"}
			style={styles.container}
		>
			<TouchableWithoutFeedback
				style={{ flex: 1 }}
				onPress={Keyboard.dismiss}
			>
				<View style={{ flex: 1, justifyContent: "space-between" }}>
					<View>
						<Text style={styles.title}>Sign Up</Text>
						<Controller
							control={control}
							rules={{
								required: true,
							}}
							render={({ field: { onChange, value } }) => (
								<Input
									placeholder="Email..."
									value={value}
									onChange={onChange}
									errorMessage={errors.email?.message}
								>
									Email
								</Input>
							)}
							name="email"
						/>
						<Controller
							control={control}
							rules={{
								required: true,
							}}
							render={({ field: { onChange, value } }) => (
								<Input
									placeholder="Password..."
									onChange={onChange}
									value={value}
									errorMessage={errors.password?.message}
									secureTextEntry={true}
								>
									Password
								</Input>
							)}
							name="password"
						/>
					</View>
				</View>
			</TouchableWithoutFeedback>
			<View
				style={{
					paddingBottom: keyboardStatus ? 100 : 20 + insets.bottom,
				}}
			>
				<ButtonLarge
					onPress={handleSubmit(handleSignup)}
					loading={isSubmitting}
				>
					Continue
				</ButtonLarge>
			</View>
		</KeyboardAvoidingView>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: "white",
		paddingHorizontal: 24,
		flex: 1,
	},
	title: {
		fontSize: 24,
		fontWeight: "600",
		marginTop: 75,
		textAlign: "center",
		marginBottom: 50,
	},
});

export default SignUp;
