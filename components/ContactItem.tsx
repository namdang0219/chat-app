import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { constant } from "../utils/constants";
import Avatar from "./Avatar";

const ContactItem = () => {
	return (
		<TouchableOpacity style={styles.container} activeOpacity={0.6}>
			<Avatar />
			<View>
				<Text style={styles.name}>Nguyen Ngoc Anh</Text>
				<Text style={styles.status}>Online</Text>
			</View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	container: {
		paddingVertical: 12,
		flexDirection: "row",
		borderBottomColor: constant.grayF7,
		borderBottomWidth: 2,
		gap: 12,
	},
	name: { fontSize: 16, fontWeight: "500", marginTop: 4 },
	status: { color: constant.grayAD, marginTop: 8 },
});

export default ContactItem;
