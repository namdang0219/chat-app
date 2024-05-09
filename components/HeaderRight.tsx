import { TouchableOpacity } from "react-native";
import React from "react";
import { constant } from "../utils/constants";

const HeaderRight = ({
	children,
	style,
}: {
	children: React.ReactNode;
	style?: Object;
}) => {
	return (
		<TouchableOpacity
			activeOpacity={0.6}
			style={[{ marginRight: constant.mainPadding }, style]}
		>
			{children}
		</TouchableOpacity>
	);
};

export default HeaderRight;
