import {
	View,
	Text,
	FlatList,
	TouchableOpacity,
	StyleSheet,
} from "react-native";
import React, { useEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import BackArrow from "../components/icons/BackArrow";
import { constant } from "../utils/constants";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Input from "../components/inputs/Input";
import Octicons from "@expo/vector-icons/Octicons";
import Ionicons from "@expo/vector-icons/Ionicons";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import HeaderRight from "../components/HeaderRight";
import PersonalMessItem from "../components/PersonalMessItem";
import { BlurView } from "expo-blur";

const PersionalChat = () => {
	const navigation = useNavigation();
	const route = useRoute<any>();
	const insets = useSafeAreaInsets();

	useEffect(() => {
		navigation.setOptions({
			headerShadowVisible: true,
			headerLeft: () => (
				<BackArrow>
					<Text style={{ fontSize: 18, fontWeight: "500" }}>
						{route.params.title}
					</Text>
				</BackArrow>
			),
			headerRight: () => (
				<HeaderRight style={{ marginRight: 6 }}>
					<SimpleLineIcons name="menu" size={20} />
				</HeaderRight>
			),
		});
	}, []);

	const styles = StyleSheet.create({
		chatField: {
			flex: 1,
			flexDirection: "column-reverse",
			backgroundColor: constant.grayF7,
		},
		bottomContainer: {
			paddingBottom: insets.bottom,
			backgroundColor: "transparent",
			position: "absolute",
			bottom: 0,
			width: "100%",
			borderTopColor: constant.grayED,
			borderTopWidth: 1,
		},
		bottomFeature: {
			height: 60,
			backgroundColor: "transparent",
			flexDirection: "row",
			alignItems: "center",
			paddingHorizontal: constant.mainPadding,
			gap: 16,
		},
		listHeader: {
			height: insets.bottom + 60,
			width: "100%",
			backgroundColor: "white",
		},
	});

	return (
		<View style={{ backgroundColor: "white", flex: 1 }}>
			<View style={styles.chatField}>
				<FlatList
					data={messages}
					inverted={true}
					renderItem={({ item }) => (
						<PersonalMessItem
							key={item.mid}
							item={item}
						></PersonalMessItem>
					)}
					ListHeaderComponent={
						<View style={styles.listHeader}></View>
					}
				/>
			</View>
			<BlurView
				tint="light"
				intensity={100}
				style={styles.bottomContainer}
			>
				<View style={styles.bottomFeature}>
					<TouchableOpacity activeOpacity={0.6}>
						<Octicons
							name="plus"
							size={24}
							color={constant.grayAD}
						/>
					</TouchableOpacity>
					<Input
						placeholder="Aa..."
						marginBottom={0}
						style={{ flex: 1 }}
					></Input>
					<TouchableOpacity activeOpacity={0.6}>
						<Ionicons
							name="send"
							size={24}
							color={constant.primaryColor}
							style={{ transform: [{ rotate: "-45deg" }] }}
						/>
					</TouchableOpacity>
				</View>
			</BlurView>
		</View>
	);
};

const chats = [1, 2, 3, 4];

const messages = [
	{
		mid: 1,
		timestamp: 10,
		sender: 1,
		receiver: 2,
		content: "Good morning, did you sleep well?",
		image: "",
		video: "",
	},
	{
		mid: 2,
		timestamp: 20,
		sender: 2,
		receiver: 1,
		content: "Yes, it is good!",
		image: "",
		video: "123",
	},
	{
		mid: 3,
		timestamp: 30,
		sender: 1,
		receiver: 2,
		content: "You have school today?",
		image: "",
		video: "",
	},
	{
		mid: 4,
		timestamp: 40,
		sender: 2,
		receiver: 1,
		content: "No, no class for today!",
		image: "https://i.pinimg.com/564x/56/63/3d/56633ddd58355c8d374ca8444598421c.jpg",
		video: "",
	},
	{
		mid: 5,
		timestamp: 50,
		sender: 2,
		receiver: 1,
		content: "Today!",
		image: "https://i.pinimg.com/564x/56/63/3d/56633ddd58355c8d374ca8444598421c.jpg",
		video: "",
	},
	{
		mid: 6,
		timestamp: 30,
		sender: 1,
		receiver: 2,
		content: "You have school today?",
		image: "",
		video: "",
	},
	{
		mid: 7,
		timestamp: 30,
		sender: 1,
		receiver: 2,
		content: "You have school today?",
		image: "https://i.pinimg.com/564x/c9/76/c1/c976c1da888f225887cca6377730c5a3.jpg",
		video: "",
	},
	{
		mid: 8,
		timestamp: 30,
		sender: 1,
		receiver: 2,
		content: "You have school today?",
		image: "",
		video: "",
	},
	{
		mid: 9,
		timestamp: 30,
		sender: 1,
		receiver: 2,
		content:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam laboriosam aliquid quas, optio non porro reiciendis ex nostrum autem placeat praesentium beatae quod! Est at saepe illum unde, quibusdam eaque!",
		image: "",
		video: "",
	},
	{
		mid: 10,
		timestamp: 30,
		sender: 1,
		receiver: 2,
		content:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam laboriosam aliquid quas, optio non porro reiciendis ex nostrum autem placeat praesentium beatae quod! Est at saepe illum unde, quibusdam eaque!",
		image: "https://i.pinimg.com/564x/b5/da/05/b5da058326bc182770801f44029ea097.jpg",
		video: "",
	},
	{
		mid: 11,
		timestamp: 30,
		sender: 1,
		receiver: 2,
		content:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam laboriosam aliquid quas, optio non porro reiciendis ex nostrum autem placeat praesentium beatae quod! Est at saepe illum unde, quibusdam eaque!",
		image: "",
		video: "",
	},
];

export default PersionalChat;
