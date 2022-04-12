import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Image } from "react-native-elements";
import { IMG_SIZE, URL_IMG } from "../constants";

const Poster = ({ img, width }) => {
    if (!img || img === "")
        return (
            <View
                style={[styles.base, styles.noImage, width && { width: width }]}
            >
                <Text style={styles.text}>Нет постера</Text>
            </View>
        );
    return (
        <Image
            source={{ uri: URL_IMG + img + IMG_SIZE }}
            style={[styles.base, width && { width: width }]}
            resizeMode="contain"
        />
    );
};

export default Poster;

const styles = StyleSheet.create({
    base: {
        aspectRatio: 140 / 210,
        borderRadius: 6,
    },
    noImage: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f6f6f6",
    },
    text: {
        fontSize: 12,
        color: "#c6c6c6",
    },
});
