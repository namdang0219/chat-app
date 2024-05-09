import {
	View,
	Text,
	SafeAreaView,
	TouchableWithoutFeedback,
	Keyboard,
	KeyboardAvoidingView,
	Platform,
	StyleSheet,
} from "react-native";
import React, { useEffect, useState } from "react";
import ButtonLarge from "../components/buttons/ButtonLarge";
import SafeView from "../layouts/SafeView";
import Input from "../components/inputs/Input";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { Controller, useForm } from "react-hook-form";

const SignUp = () => {
	const insets = useSafeAreaInsets();
	const [keyboardStatus, setKeyboardStatus] = useState(false);
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: {
			email: "",
			password: "",
		},
	});
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

	const handleSignup = (data : {email: string, password: string}) => console.log(data);

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
				<ButtonLarge onPress={handleSubmit(handleSignup)}>
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
