import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import React from "react";
import { constant } from "../utils/constants";

const Avatar = ({ story }: { story?: boolean }) => {
	return (
		<View>
			<TouchableOpacity activeOpacity={0.6} style={styles.avatarOutline}>
				<View style={styles.avatarMidline}>
					<Image
						source={{
							uri: "https://photo-cms-smoney.epicdn.me/w700/Uploaded/2024/jhvkbun/2024_03_27/snapinstaapp-330452900-1377964809672920-4354724359024018503-n-1080-1-618.jpg",
						}}
						style={styles.avatar}
					/>
				</View>
				<View style={styles.online}></View>
			</TouchableOpacity>
			{story && (
				<View style={{width: 60, marginTop: 4}}>
					<Text numberOfLines={1} style={{fontSize: 10, textAlign: 'center'}}>Nghiem Ngoc Mai</Text>
				</View>
			)}
		</View>
	);
};

const styles = StyleSheet.create({
	avatarOutline: {
		backgroundColor: constant.primaryColor,
		borderRadius: 20,
		width: 60,
		height: 60,
		justifyContent: "center",
		alignItems: "center",
		position: "relative",
	},
	avatarMidline: {
		width: 55,
		height: 55,
		backgroundColor: "white",
		borderRadius: 18,
		justifyContent: "center",
		alignItems: "center",
	},
	avatar: { width: 50, height: 50, borderRadius: 16 },
	online: {
		position: "absolute",
		width: 14,
		height: 14,
		borderRadius: 6,
		backgroundColor: "#2CC069",
		borderColor: "white",
		borderWidth: 2,
		top: 0,
		right: 0,
	},
});

export default Avatar;
