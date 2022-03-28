import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Image } from "react-native-elements";

const Picture = ({ img, width }) => {
    const url = "https://avatars.mds.yandex.net/get-kinopoisk-image";
    const size = "140x210";

    return (
        <Image
            source={{ uri: url + img + size }}
            style={{ width: width, aspectRatio: 140 / 210, borderRadius: 7 }}
            resizeMode="cover"
        />
    );
};

export default Picture;
