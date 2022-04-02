import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Poster from "./Poster";

const MovieHeader = ({ movie }) => {
    return (
        <View style={styles.container}>
            <Poster width={100} img={movie.img} />
            <View style={styles.titleContainer}>
                <Text style={styles.text}>{movie.name}</Text>
                <Text style={styles.color}>{movie.year}</Text>
            </View>
        </View>
    );
};

export default MovieHeader;

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
    },
    titleContainer: {
        flex: 1,
        marginLeft: 20,
    },
    text: {
        fontSize: 24,
        color: "#202124",
    },
    color: {
        color: "#202124",
    },
});
