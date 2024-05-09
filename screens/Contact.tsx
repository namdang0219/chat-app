import {
	View,
	Text,
	TouchableWithoutFeedback,
	Keyboard,
	FlatList,
	StyleSheet,
} from "react-native";
import React from "react";
import Input from "../components/inputs/Input";
import { constant } from "../utils/constants";
import ContactItem from "../components/ContactItem";
import { useHeaderHeight } from "@react-navigation/elements";

const Contact = () => {
	const headerHeight = useHeaderHeight();

	const styles = StyleSheet.create({
		container: {
			flex: 1,
			backgroundColor: "white",
			
		},
		inputContainer: {
			marginBottom: 10,
			marginTop: headerHeight
		},
	});

	return (
		<TouchableWithoutFeedback
			onPress={() => Keyboard.dismiss()}
			style={{ flex: 1 }}
		>
			<View style={styles.container}>
				<FlatList
					data={data}
					ListHeaderComponent={
						<View style={styles.inputContainer}>
							<Input
								placeholder="Search"
								marginBottom={0}
							></Input>
						</View>
					}
					style={{ flex: 1, paddingHorizontal: constant.mainPadding,  }}
					renderItem={({ item }) => <ContactItem></ContactItem>}
				></FlatList>
			</View>
		</TouchableWithoutFeedback>
	);
};

const data = [
	{
		id: 1,
	},
	{
		id: 2,
	},
	{
		id: 4,
	},
	{
		id: 5,
	},
	{
		id: 6,
	},
	{
		id: 7,
	},
	{
		id: 8,
	},
	{
		id: 9,
	},
	{
		id: 0,
	},
	{
		id: 12,
	},
];

export default Contact;
