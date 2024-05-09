import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer, useNavigation, useRoute } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Walkthrough from "./screens/Walkthrough";
import SignUp from "./screens/SignUp";
import BackArrow from "./components/icons/BackArrow";
import SetupProfile from "./screens/SetupProfile";
import BottomNavigation from "./navigations/BottomNavigation";
import PersionalChat from "./screens/PersionalChat";

const Stack = createNativeStackNavigator();

const App = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Group
					screenOptions={{
						headerTitle: () => "",
						headerBackTitleVisible: false,
						headerShadowVisible: false,
						headerLeft: () => <BackArrow />,
					}}
				>
					<Stack.Screen
						options={{ headerShown: false }}
						name="Walkthrough"
						component={Walkthrough}
					/>
					<Stack.Screen name="SignUp" component={SignUp} />
					<Stack.Screen
						name="SetupProfile"
						component={SetupProfile}
					/>
					<Stack.Screen
						options={{ headerShown: false }}
						name="BottomNavigation"
						component={BottomNavigation}
					/>
					<Stack.Screen
						name="PersionalChat"
						component={PersionalChat}
					/>
				</Stack.Group>
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default App;
