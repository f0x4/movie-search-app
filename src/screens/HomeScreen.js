import { StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";
import FakeSearch from "../components/FakeSearch";

const HomeScreen = () => {
    return (
        <View style={[styles.marginTop, styles.container]}>
            <FakeSearch />
        </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    marginTop: {
        marginTop: StatusBar.currentHeight,
    },
    container: {
        flex: 1,
        justifyContent: "center",
        marginHorizontal: 16,
    },
});
