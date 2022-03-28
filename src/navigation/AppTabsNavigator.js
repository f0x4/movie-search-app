import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";

const AppTabs = createBottomTabNavigator();

const AppTabsNavigator = () => {
    return (
        <AppTabs.Navigator screenOptions={{ headerShown: false }}>
            <AppTabs.Screen name="HomeScreen" component={HomeScreen} />
        </AppTabs.Navigator>
    );
};

export default AppTabsNavigator;
