import React from "react";
import AppTabsNavigator from "./AppTabsNavigator";
import MovieScreen from "../screens/MovieScreen";
import AutocompleteScreen from "../screens/AutocompleteScreen";
import { createStackNavigator } from "@react-navigation/stack";
import PlayerScreen from "../screens/PlayerScreen";
import SearchScreen from "../screens/SearchScreen";

const RootStack = createStackNavigator();

const RootStackNavigator = () => {
    return (
        <RootStack.Navigator
            screenOptions={{
                headerShown: false,
                animationEnabled: false,
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
            <RootStack.Screen name="SearchScreen" component={SearchScreen} />
            <RootStack.Screen name="MovieScreen" component={MovieScreen} />
            <RootStack.Screen name="PlayerScreen" component={PlayerScreen} />
        </RootStack.Navigator>
    );
};

export default RootStackNavigator;
