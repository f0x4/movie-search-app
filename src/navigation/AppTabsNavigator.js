import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import { Icon } from "react-native-elements";

const AppTabs = createBottomTabNavigator();

const AppTabsNavigator = () => {
    return (
        <AppTabs.Navigator screenOptions={{ headerShown: false }}>
            <AppTabs.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{
                    tabBarLabel: "Главный",
                    tabBarIcon: ({ color, size }) => (
                        <Icon
                            type="material"
                            size={size}
                            color={color}
                            name="home"
                        />
                    ),
                }}
            />
        </AppTabs.Navigator>
    );
};

export default AppTabsNavigator;
