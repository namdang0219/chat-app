import {
	View,
	Text,
	ScrollView,
	StyleSheet,
} from "react-native";
import React from "react";
import { constant } from "../utils/constants";
import AntDesign from "@expo/vector-icons/AntDesign";
import Octicons from "@expo/vector-icons/Octicons";
import Ionicons from "@expo/vector-icons/Ionicons";
import Feather from "@expo/vector-icons/Feather";
import MoreItem from "../components/MoreItem";
import MoreProfile from "../modules/MoreProfile";
import { useHeaderHeight } from "@react-navigation/elements";

const More = () => {
	const headerHeight = useHeaderHeight();
	return (
		<ScrollView style={styles.container}>
			<View style={{ marginTop: headerHeight }}>
				<MoreProfile />
			</View>
			<View
				style={{
					borderBottomColor: constant.grayAD,
					borderBottomWidth: 0.2,
				}}
			>
				{personals.map((item) => (
					<MoreItem key={item.name} item={item} />
				))}
			</View>
			<View
				style={{
					borderBottomColor: constant.grayAD,
					borderBottomWidth: 0.2,
				}}
			>
				{systems.map((item) => (
					<MoreItem key={item.name} item={item} />
				))}
			</View>
			{services.map((item) => (
				<MoreItem key={item.name} item={item} />
			))}
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: "white",
		flex: 1,
		paddingTop: 8,
		paddingHorizontal: 16,
	},
});

const personals = [
	{
		name: "Account",
		icon: <AntDesign name="user" size={24} />,
	},
	{
		name: "Chats",
		icon: <Ionicons name="chatbubble-outline" size={24} />,
	},
];
const systems = [
	{
		name: "Appereance",
		icon: <Feather name="sun" size={24} />,
	},
	{
		name: "Notification",
		icon: <Feather name="bell" size={24} />,
	},
	{
		name: "Privacy",
		icon: <Octicons name="shield" size={24} />,
	},
	{
		name: "Data Usage",
		icon: <Ionicons name="folder-outline" size={22} />,
	},
];
const services = [
	{
		name: "Help",
		icon: <Feather name="help-circle" size={22} />,
	},
	{
		name: "Invite your friends",
		icon: <AntDesign name="mail" size={22} />,
	},
];

export default More;
