import { View, Text } from "react-native";
import React from "react";

const TabActiveName = ({children}: {children: React.ReactNode}) => {
	return (
		<View style={{ width: 50 }}>
			<Text style={{ textAlign: "center", marginBottom: 5 }}>
				{children}
			</Text>
			<View
				style={{
					flexDirection: "row",
					justifyContent: "center",
				}}
			>
				<View
					style={{
						width: 4,
						height: 4,
						borderRadius: 3,
						backgroundColor: "black",
					}}
				></View>
			</View>
		</View>
	);
};

export default TabActiveName;
