import { StyleSheet, Text, View } from "react-native";
import React from "react";
import WebView from "react-native-webview";
import { URL_PLAYER } from "../constants";

const PlayerScreen = ({ route }) => {
    const movie = route.params.movie;
    return (
        <WebView
            style={styles.container}
            source={{
                uri: URL_PLAYER + movie.id,
            }}
            allowsFullscreenVideo={true}
        />
    );
};

export default PlayerScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black",
    },
});
