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
} from "react-native";
import React, { useEffect, useState } from "react";
import SafeView from "../layouts/SafeView";
import { constant } from "../utils/constants";
import AntDesign from "@expo/vector-icons/AntDesign";
import Input from "../components/inputs/Input";
import ButtonLarge from "../components/buttons/ButtonLarge";
import { useNavigation } from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const SetupProfile = () => {
	const { navigate } = useNavigation<any>();
	const insets = useSafeAreaInsets();
	const [keyboardStatus, setKeyboardStatus] = useState(false);
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
						<TouchableOpacity style={styles.avatar}>
							<Image
								style={styles.image}
								source={require("./../assets/avatar.png")}
							/>
							<View style={styles.plusIcon}>
								<AntDesign name="pluscircle" size={20} />
							</View>
						</TouchableOpacity>
					</View>
					<View>
						<Input placeholder="Enter your first name...">
							First Name
						</Input>
						<Input placeholder="Enter your last name...">
							First Name
						</Input>
					</View>
				</View>
			</TouchableWithoutFeedback>
			<View
				style={{
					paddingBottom: keyboardStatus ? 100 : 20 + insets.bottom,
				}}
			>
				<ButtonLarge onPress={() => navigate("BottomNavigation")}>
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
