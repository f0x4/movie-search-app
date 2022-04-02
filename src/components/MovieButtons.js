import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Button } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

const MovieButtons = ({ movie }) => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Button
                containerStyle={{ flexGrow: 1 }}
                title="В избранное"
                type="outline"
            />
            <Button
                containerStyle={{ flexGrow: 1, marginLeft: 20 }}
                title="Смотреть"
                onPress={() => navigation.navigate("PlayerScreen", { movie })}
            />
        </View>
    );
};

export default MovieButtons;

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        marginVertical: 20,
    },
});
