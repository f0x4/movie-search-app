import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Button } from "react-native-elements";

const MovieButtons = () => {
    return (
        <View style={styles.container}>
            <Button title="Смотреть" />
        </View>
    );
};

export default MovieButtons;

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
    },
});
