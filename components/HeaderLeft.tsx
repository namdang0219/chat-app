import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { constant } from "../utils/constants";

const HeaderLeft = ({ children }: { children: React.ReactNode }) => {
	return (
		<Text
			style={{
				fontSize: 18,
				marginLeft: constant.mainPadding,
			}}
		>
			{children}
		</Text>
	);
};

export default HeaderLeft;
