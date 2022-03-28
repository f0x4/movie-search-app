import React from "react";
import AppTabsNavigator from "./AppTabsNavigator";
import MovieScreen from "../screens/MovieScreen";
import AutocompleteScreen from "../screens/AutocompleteScreen";
import { createStackNavigator } from "@react-navigation/stack";

const RootStack = createStackNavigator();

const RootStackNavigator = () => {
    return (
        <RootStack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <RootStack.Screen
                name="AppTabsNavigator"
                component={AppTabsNavigator}
            />
            <RootStack.Screen
                name="AutocompleteScreen"
                component={AutocompleteScreen}
            />
            <RootStack.Screen name="MovieScreen" component={MovieScreen} />
        </RootStack.Navigator>
    );
};

export default RootStackNavigator;
