import {
    Pressable,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import React from "react";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

const FakeSearch = ({ text }) => {
    const navigation = useNavigation();
    const searchText = text || "Найти фильм";

    return (
        <TouchableOpacity
            style={[styles.container, styles.shadow]}
            onPress={() => {
                navigation.navigate("AutocompleteScreen", {
                    text: !text ? "" : text,
                });
            }}
        >
            <Icon
                style={styles.icon}
                type="material"
                size={22}
                color="#9aa0a6"
                name="search"
            />
            <Text style={styles.text} numberOfLines={1} ellipsizeMode="middle">
                {searchText}
            </Text>
        </TouchableOpacity>
    );
};

export default FakeSearch;

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 25,
        padding: 12,
        backgroundColor: "#fff",
    },
    border: {
        borderColor: "#dfe1e5",
        borderWidth: 1,
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 4,
    },
    icon: {
        marginLeft: 5,
        marginRight: 10,
    },
    text: {
        fontSize: 16,
        color: "#5f6368",
    },
});
