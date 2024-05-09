import { View, Text, TextInput } from "react-native";
import React from "react";
import { constant } from "../../utils/constants";
import { useRoute } from "@react-navigation/native";

interface IInput {
	placeholder: string;
	children?: React.ReactNode;
	style?: Object;
	marginBottom?: number;
	onChange?: () => void;
	value?: string
}

const Input = ({
	placeholder,
	children,
	style,
	marginBottom = 20,
	onChange,
	value
}: IInput) => {
	return (
		<View style={[{ marginBottom: marginBottom }, style]}>
			{children && (
				<Text
					style={{ fontSize: 16, fontWeight: "600", marginBottom: 8 }}
				>
					{children}
				</Text>
			)}
			<TextInput
				placeholder={placeholder}
				autoComplete="off"
				autoCorrect={false}
				onChangeText={onChange}
				value={value}
				style={{
					backgroundColor: constant.grayF7,
					paddingHorizontal: 12,
					paddingVertical: 14,
					borderRadius: 8,
				}}
			/>
		</View>
	);
};

export default Input;
