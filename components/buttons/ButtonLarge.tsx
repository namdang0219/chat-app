import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { constant } from "../../utils/constants";

const ButtonLarge = ({
	children,
	onPress,
}: {
	children: React.ReactNode;
	onPress?: () => void;
}) => {
	return (
		<TouchableOpacity
			onPress={onPress}
			activeOpacity={0.75}
			style={styles.button}
		>
			<Text style={styles.content}>{children}</Text>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	button: {
		backgroundColor: constant.primaryColor,
		height: 52,
		borderRadius: 27,
		justifyContent: "center",
		alignItems: "center",
	},
	content: {
		color: constant.grayF7,
		fontSize: 16,
		fontWeight: "600",
		
	},
});

export default ButtonLarge;
