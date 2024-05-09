import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import ButtonLarge from "../components/buttons/ButtonLarge";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

const Walkthrough = () => {
	const insets = useSafeAreaInsets();
	const { navigate } = useNavigation<any>();
	const styles = StyleSheet.create({
		container: {
			flex: 1,
			paddingBottom: insets.bottom,
			paddingTop: insets.top,
      backgroundColor: 'white',
		},
		image: {
			objectFit: "contain",
			width: 300,
			height: 400,
			marginTop: -50,
		},
		heading: {
			maxWidth: 280,
			textAlign: "center",
			fontSize: 24,
			fontWeight: "600",
			lineHeight: 32,
			letterSpacing: 1,
		},
		privacy: {
			marginTop: "auto",
			textAlign: "center",
			marginBottom: 18,
		},
		centerContainer: {
			flex: 1,
			justifyContent: "center",
			alignItems: "center",
		},
		bottomContainer: {
			marginHorizontal: 24,
			marginBottom: 20,
		},
	});
	return (
		<View style={styles.container}>
			<View style={styles.centerContainer}>
				<Image
					source={require("./../assets/walkthrough.png")}
					style={styles.image}
				/>
				<Text style={styles.heading}>
					Connect easily with your family and friends over countries
				</Text>
			</View>
			<View style={styles.bottomContainer}>
				<Text style={styles.privacy}>Terms & Privacy Policy</Text>
				<ButtonLarge onPress={() => navigate("SignUp")}>
					Start Messaging
				</ButtonLarge>
			</View>
		</View>
	);
};

export default Walkthrough;
