import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Image } from "react-native-elements";
import { IMG_SIZE, URL_IMG } from "../utils/constant";

const Poster = ({ img, width }) => {
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
        borderRadius: 7,
    },
});
