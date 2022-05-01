import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Image } from "react-native-elements";
import { IMG_SIZE, URL_IMG } from "../constants";

const PosterMini = ({ img, width }) => {
    if (!img || img === "")
        return (
            <View
                style={[styles.base, styles.noImage, width && { width: width }]}
            >
                <Text style={styles.text}>Нет{"\n"}постера</Text>
            </View>
        );
    return (
        <View>
            <Image
                source={{ uri: URL_IMG + img + IMG_SIZE }}
                style={[styles.base, width && { width: width }]}
                resizeMode="cover"
            />
        </View>
    );
};

export default PosterMini;

const styles = StyleSheet.create({
    base: {
        aspectRatio: 1 / 1,
        borderRadius: 4,
    },
    noImage: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f6f6f6",
    },
    text: {
        textAlign: "center",
        fontSize: 12,
        color: "#c6c6c6",
    },
});
