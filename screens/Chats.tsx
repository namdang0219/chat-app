import { View, StyleSheet, FlatList, ScrollView } from "react-native";
import React from "react";
import { constant } from "../utils/constants";
import Avatar from "../components/Avatar";
import AddStory from "../modules/AddStory";
import Input from "../components/inputs/Input";
import ChatItem from "../components/ChatItem";
import { useNavigation } from "@react-navigation/native";
import { useHeaderHeight } from '@react-navigation/elements';

const Chats = () => {
	const { navigate } = useNavigation<any>();
	const headerHeight = useHeaderHeight();

	const styles = StyleSheet.create({
		container: {
			flex: 1,
			backgroundColor: "white",
		},
		storyContainer: {
			paddingLeft: constant.mainPadding,
			paddingVertical: 10,
			flexGrow: 0,
			marginBottom: 10,
			marginTop: headerHeight
		},
		input: {
			marginBottom: 10,
			paddingHorizontal: constant.mainPadding,
		},
	});
	
	return (
		<View style={styles.container}>
			{/* <HeaderHeight></HeaderHeight> */}
			<FlatList
				data={stories}
				ListHeaderComponent={
					<>
						<ScrollView
							horizontal={true}
							showsHorizontalScrollIndicator={false}
							style={styles.storyContainer}
						>
							<View style={{ marginRight: 16 }}>
								<AddStory />
							</View>
							{stories.map((item, index) => (
								<View key={index} style={{ marginRight: 16 }}>
									<Avatar story />
								</View>
							))}
							<View style={{ width: 24 }}></View>
						</ScrollView>
						<Input placeholder="Search" style={styles.input} />
					</>
				}
				renderItem={({ item, index }) => (
					<ChatItem
						onPress={() => navigate("PersionalChat", {title: item.name})}
						key={index}
					></ChatItem>
				)}
			/>
		</View>
	);
};



const stories = [
	{
		name: "Minh Anh",
	},
	{
		name: "Minh Anh",
	},
	{
		name: "Minh Anh",
	},
	{
		name: "Minh Anh",
	},
	{
		name: "Minh Anh",
	},
];

export default Chats;
