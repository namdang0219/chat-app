import { View, Text, KeyboardAvoidingView, Platform } from "react-native";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const SafeView = ({
	children,
	style,
}: {
	children: React.ReactNode;
	style?: Object;
}) => {
	const insets = useSafeAreaInsets();
	return (
		<View
			style={[{ paddingBottom: insets.bottom, flex: 1 }, style]}
		>
			{children}
		</View>
	);
};

export default SafeView;
