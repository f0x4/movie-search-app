import { BackHandler, StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Image } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import Picture from "../components/Picture";
import MovieHeader from "../components/MovieHeader";
import MovieButtons from "../components/MovieButtons";

const MovieScreen = ({ route }) => {
    const movie = route.params.movie;

    return (
        <View style={styles.container}>
            <MovieHeader movie={movie} />
            <MovieButtons />
        </View>
    );
};

export default MovieScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 20,
        marginTop: StatusBar.currentHeight + 20,
    },
});
