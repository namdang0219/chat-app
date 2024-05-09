import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { constant } from "../../utils/constants";
import { useRoute } from "@react-navigation/native";
import Feather from "@expo/vector-icons/Feather";

interface IInput {
	placeholder: string;
	children?: React.ReactNode;
	style?: Object;
	marginBottom?: number;
	onChange?: () => void;
	value?: string;
	errorMessage?: string | undefined;
	secureTextEntry?: boolean;
}

const Input = ({
	placeholder,
	children,
	style,
	marginBottom = 20,
	onChange,
	value,
	errorMessage,
	secureTextEntry = false,
}: IInput) => {

	const [showPassword, setShowPassword] = useState<boolean>(secureTextEntry)

	return (
		<View
			style={[
				{ marginBottom: marginBottom, position: "relative" },
				style,
			]}
		>
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
				secureTextEntry={showPassword}
				value={value}
				style={{
					backgroundColor: constant.grayF7,
					paddingHorizontal: 12,
					paddingVertical: 14,
					borderRadius: 8,
				}}
			/>
			{secureTextEntry && (
				<TouchableOpacity activeOpacity={0.6} onPress={() => setShowPassword(!showPassword)}>
					<Feather
						name={showPassword ? 'eye-off' : 'eye'}
						size={16}
						style={{ position: "absolute", right: 16, bottom: 14 }}
						color={constant.grayAD}
					></Feather>
				</TouchableOpacity>
			)}
			{errorMessage && (
				<Text
					style={{
						color: "red",
						position: "absolute",
						bottom: -16,
						left: 10,
						fontSize: 12,
					}}
				>
					{errorMessage}
				</Text>
			)}
		</View>
	);
};

export default Input;
