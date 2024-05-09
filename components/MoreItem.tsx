import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import Octicons from "@expo/vector-icons/Octicons";

const MoreItem = ({
	item: { icon, name },
	onPress,
}: {
	item: { icon: React.ReactNode; name: string };
	onPress?: () => void;
}) => {
	return (
		<TouchableOpacity activeOpacity={0.6} style={styles.container} onPress={onPress}>
			<View style={{ width: 24 }}>{icon}</View>
			<Text style={{ fontSize: 16, flex: 1 }}>{name}</Text>
			<Octicons name="chevron-right" size={24} />
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		alignItems: "center",
		gap: 6,
		paddingVertical: 16,
		paddingLeft: 4,
	},
});

export default MoreItem;
