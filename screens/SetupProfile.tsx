import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	Image,
	Keyboard,
	KeyboardAvoidingView,
	Platform,
	TouchableWithoutFeedback,
	Alert,
} from "react-native";
import React, { useEffect, useState } from "react";
import SafeView from "../layouts/SafeView";
import { constant } from "../utils/constants";
import AntDesign from "@expo/vector-icons/AntDesign";
import Input from "../components/inputs/Input";
import ButtonLarge from "../components/buttons/ButtonLarge";
import { useNavigation } from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import * as Yup from "yup";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { auth, storage } from "../firebase-config";
import { updateProfile } from "firebase/auth";
import * as ImagePicker from "expo-image-picker";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

const SetupProfile = () => {
	const { navigate } = useNavigation<any>();
	const insets = useSafeAreaInsets();
	const [keyboardStatus, setKeyboardStatus] = useState(false);
	const [image, setImage] = useState<string>("");
	const [avatarUrl, setAvatarUrl] = useState<string>("");

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

	const signUpSchema = Yup.object({
		firstName: Yup.string()
			.required("Please type your first name")
			.min(2, "Your email must be over 2 charactors")
			.max(10, "Your email could not over 10 charactors"),
		lastName: Yup.string()
			.required("Please type your first name")
			.min(2, "Your password must be over 2 charactors")
			.max(10, "Your password could not over 10 charactors"),
	});

	const {
		control,
		handleSubmit,
		formState: { errors, isValid, isSubmitting },
		reset,
	} = useForm({
		defaultValues: {
			firstName: "",
			lastName: "",
		},
		resolver: yupResolver(signUpSchema),
	});

	const handleSetupProfile = async (data: any) => {
		if (!isValid || !auth.currentUser) return;
		try {
			if (!image) {
				Alert.alert("Please upload a image");
			}
			// fetch image from url and convert respone to blob
			const response = await fetch(image);
			const blob = await response.blob();
			const storageRef = ref(storage, `${auth.currentUser.uid}-avatar`);
			await uploadBytesResumable(storageRef, blob);
			getDownloadURL(storageRef)
				.then((url) => {
					setAvatarUrl(url);
				})
				.catch((error) => {
					// A full list of error codes is available at
					// https://firebase.google.com/docs/storage/web/handle-errors
					switch (error.code) {
						case "storage/object-not-found":
							// File doesn't exist
							break;
						case "storage/unauthorized":
							// User doesn't have permission to access the object
							break;
						case "storage/canceled":
							// User canceled the upload
							break;

						case "storage/unknown":
							// Unknown error occurred, inspect the server response
							break;
					}
				});
			await updateProfile(auth.currentUser, {
				displayName: `${data?.firstName} ${data?.lastName}`,
				photoURL: avatarUrl,
			});
			reset();
			navigate("BottomNavigation");
		} catch (error) {
			Alert.alert("Something is invalid");
		}
	};

	const pickImage = async () => {
		// No permissions request is necessary for launching the image library
		let result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.All,
			allowsEditing: true,
			aspect: [1, 1],
			quality: 1,
		});
		console.log("🚀 ~ pickImage ~ result:", result);
		if (!result.canceled) {
			setImage(result.assets[0].uri);
		}
	};

	return (
		<KeyboardAvoidingView
			behavior={Platform.OS === "ios" ? "padding" : "height"}
			style={{
				backgroundColor: "white",
				paddingHorizontal: 24,
				flex: 1,
			}}
		>
			<TouchableWithoutFeedback
				style={{ flex: 1 }}
				onPress={Keyboard.dismiss}
			>
				<View style={{ flex: 1 }}>
					<View style={styles.avatarContainer}>
						<TouchableOpacity
							style={styles.avatar}
							onPress={pickImage}
						>
							{image ? (
								<Image
									style={styles.image}
									source={{ uri: image }}
								/>
							) : (
								<Image
									style={styles.image}
									source={require("./../assets/avatar.png")}
								/>
							)}
							{!image && (
								<View style={styles.plusIcon}>
									<AntDesign
										name="pluscircle"
										size={20}
										color={constant.grayAD}
									/>
								</View>
							)}
						</TouchableOpacity>
					</View>
					<View>
						<Controller
							control={control}
							rules={{
								required: true,
							}}
							render={({ field: { onChange, value } }) => (
								<Input
									placeholder="First name..."
									value={value}
									onChange={onChange}
									errorMessage={errors.firstName?.message}
								>
									First Name
								</Input>
							)}
							name="firstName"
						/>

						<Controller
							control={control}
							rules={{
								required: true,
							}}
							render={({ field: { onChange, value } }) => (
								<Input
									placeholder="Last name..."
									value={value}
									onChange={onChange}
									errorMessage={errors.lastName?.message}
								>
									Last Name
								</Input>
							)}
							name="lastName"
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
					onPress={handleSubmit(handleSetupProfile)}
					loading={isSubmitting}
				>
					Save
				</ButtonLarge>
			</View>
		</KeyboardAvoidingView>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: "white",
	},
	avatarContainer: {
		alignItems: "center",
		justifyContent: "center",
		marginTop: 50,
		marginBottom: 45,
	},
	avatar: {
		backgroundColor: constant.grayF7,
		width: 100,
		height: 100,
		borderRadius: 50,
		position: "relative",
		marginHorizontal: "auto",
	},
	image: {
		width: 100,
		height: 100,
		borderRadius: 50,
	},
	plusIcon: {
		position: "absolute",
		bottom: 0,
		right: 10,
	},
});

export default SetupProfile;
