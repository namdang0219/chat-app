import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { constant } from "../utils/constants";
import Feather from "@expo/vector-icons/Feather";

const AddStory = () => {
	return (
		<View style={styles.container}>
			<TouchableOpacity
				activeOpacity={0.6}
				style={styles.outline}
			>
				<View style={styles.midline}>
					<View style={styles.content}>
						<Feather
							name="plus"
							size={22}
							color={constant.grayAD}
						/>
					</View>
				</View>
			</TouchableOpacity>
			<Text style={styles.label}>Your story</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		width: 60
	},
	outline: {
		backgroundColor: constant.grayAD,
		borderRadius: 20,
		width: 60,
		height: 60,
		justifyContent: "center",
		alignItems: "center",
		marginBottom: 4
	},
	midline: {
		width: 55,
		height: 55,
		backgroundColor: "white",
		borderRadius: 18,
		justifyContent: "center",
		alignItems: "center",
	},
	content: {
		width: 50,
		height: 50,
		borderRadius: 16,
		backgroundColor: constant.grayF7,
		justifyContent: "center",
		alignItems: "center",
	},
	label: {
		fontSize: 10,
		textAlign: "center"
	}
});

export default AddStory;
