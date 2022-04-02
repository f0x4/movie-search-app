import { StatusBar, StyleSheet, View } from "react-native";
import React from "react";

import MovieHeader from "../components/MovieHeader";
import MovieButtons from "../components/MovieButtons";

const MovieScreen = ({ route }) => {
    const movie = route.params.movie;

    return (
        <View style={styles.container}>
            <MovieHeader movie={movie} />
            <MovieButtons movie={movie} />
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
