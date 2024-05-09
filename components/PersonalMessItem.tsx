import { View, Text, useWindowDimensions } from "react-native";
import React from "react";
import { constant } from "../utils/constants";
import Image from "react-native-image-auto-height";
import Clip from "../modules/Clip";

interface IPersonalMessItem {
	item: {
		mid?: string | number;
		timestamp?: string | number;
		sender?: string | number;
		receiver?: string | number;
		content?: string;
		image?: string;
		video?: string;
	};
}

const PersonalMessItem = ({
	item: { mid, timestamp, sender, receiver, content, image, video },
}: IPersonalMessItem) => {
	const width = useWindowDimensions().width;
	return (
		<View
			style={{
				flexDirection: sender == 1 ? "row-reverse" : "row",
				paddingHorizontal: constant.mainPadding - 10,
			}}
		>
			<View
				style={{
					backgroundColor:
						sender == 1 ? constant.primaryColor : "white",
					padding: 10,
					marginBottom: 12,
					borderRadius: 16,
					borderBottomRightRadius: sender == 1 ? 0 : 16,
					borderBottomLeftRadius: sender == 1 ? 16 : 0,
				}}
			>
				{image && (
					<Image
						source={{ uri: image }}
						style={{
							width: width - constant.mainPadding * 2,
              height: 'auto',
							borderRadius: 10,
              marginBottom: 10
						}}
					/>
				)}
				{video && <Clip></Clip>}
				{content && (
					<Text style={{ color: sender == 1 ? "white" : "black", fontSize: 15 }}>
						{content}
					</Text>
				)}
				<Text
					style={{
						marginTop: 6,
						color: sender == 1 ? "white" : constant.grayAD,
						fontSize: 10,
						textAlign: sender == 1 ? "right" : 'left'
					}}
				>
					{timestamp}
				</Text>
			</View>
		</View>
	);
};

export default PersonalMessItem;
