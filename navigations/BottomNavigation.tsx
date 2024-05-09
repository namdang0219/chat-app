import React from "react";
import Contact from "../screens/Contact";
import Chats from "../screens/Chats";
import More from "../screens/More";
import Feather from "@expo/vector-icons/Feather";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import HeaderLeft from "../components/HeaderLeft";
import HeaderRight from "../components/HeaderRight";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TabActiveName from "../modules/TabActiveName";
import { BlurView } from "expo-blur";
import { StyleSheet } from "react-native";

const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
	return (
		<Tab.Navigator
			screenOptions={({ route }) => ({
				animation: "shift",
				headerTitle: "",
				headerTransparent: true,
				headerBackground: () => (
					<BlurView
						tint="light"
						intensity={100}
						style={StyleSheet.absoluteFill}
					/>
				),
				headerShadowVisible: false,
				tabBarShowLabel: false,
				tabBarIconStyle: {
					marginBottom: 8,
				},
				tabBarIcon: ({ focused }) => {
					return (
						<>
							{(route.name === "Contact" &&
								(focused ? (
									<TabActiveName>{route.name}</TabActiveName>
								) : (
									<Feather name="users" size={26} />
								))) ||
								(route.name === "Chats" &&
									(focused ? (
										<TabActiveName>
											{route.name}
										</TabActiveName>
									) : (
										<Ionicons
											name="chatbubble-outline"
											size={26}
										/>
									))) ||
								(route.name === "More" &&
									(focused ? (
										<TabActiveName>
											{route.name}
										</TabActiveName>
									) : (
										<Feather name="menu" size={28} />
									)))}
						</>
					);
				},
			})}
		>
			<Tab.Screen
				name="Contact"
				component={Contact}
				options={() => ({
					headerLeft: () => <HeaderLeft>Contact</HeaderLeft>,
					headerRight: () => (
						<HeaderRight>
							<Feather name="plus" size={22} />
						</HeaderRight>
					),
				})}
			/>
			<Tab.Screen
				name="Chats"
				component={Chats}
				options={{
					headerLeft: () => <HeaderLeft>Chats</HeaderLeft>,
					headerRight: () => (
						<HeaderRight>
							<MaterialCommunityIcons
								name="playlist-check"
								size={30}
							/>
						</HeaderRight>
					),
				}}
			/>
			<Tab.Screen
				name="More"
				component={More}
				options={{
					headerLeft: () => <HeaderLeft>More</HeaderLeft>,
					headerRight: () => (
						<HeaderRight>
							<Feather name="log-out" size={20} />
						</HeaderRight>
					),
				}}
			/>
		</Tab.Navigator>
	);
};

export default BottomNavigation;
