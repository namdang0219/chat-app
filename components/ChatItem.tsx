import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { constant } from "../utils/constants";
import Avatar from "./Avatar";

const ChatItem = ({onPress}: {onPress?: () => void}) => {
	return (
		<TouchableOpacity onPress={onPress} style={styles.container} activeOpacity={0.6}>
			<Avatar />
			<View style={{ flex: 1 }}>
				<View
					style={styles.nameTimeContainer}
				>
					<Text style={styles.name}>Nguyen Ngoc Anh</Text>
					<Text style={styles.time}>Today</Text>
				</View>
				<View
					style={styles.overviewContainer}
				>
					<Text style={styles.overview} numberOfLines={1}>
						Lorem ipsum dolor sit amet consectetur, adipisicing
						elit. Quae ratione laboriosam fuga, minus a similique
						autem nemo eligendi illum id.
					</Text>
					<View style={styles.newChat}>
						<Text style={{ fontSize: 16 }}>3</Text>
					</View>
				</View>
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
		paddingHorizontal: constant.mainPadding,
	},
	nameTimeContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		paddingTop: 4,
	},
	name: { fontSize: 16, fontWeight: "500" },
	time: { color: constant.grayAD },
	overviewContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		paddingTop: 8,
	},
	overview: { color: constant.grayAD, flex: 1 },
	newChat: {
		backgroundColor: "#D2D5F9",
		width: 25,
		height: 25,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 12,
		marginLeft: 16,
	},
});

export default ChatItem;
