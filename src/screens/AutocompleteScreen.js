import {
    FlatList,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import React, { useEffect, useState, useDeferredValue } from "react";
import SearchBar from "react-native-elements/dist/searchbar/SearchBar-android";
import { Divider } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import useDebounce from "../hooks/useDebounce";

const AutocompleteScreen = () => {
    const [search, setSearch] = useState("");
    const [data, setData] = useState([]);
    const debouncedSearch = useDebounce(search, 800);
    const navigation = useNavigation();
    const url = "https://movie-search-api-mini.herokuapp.com/autocomplete/";

    useEffect(() => {
        fetchData(search);
    }, [debouncedSearch]);

    const fetchData = async (search) => {
        if (search.length <= 2) {
            setData([]);
            return;
        }

        const resp = await fetch(url + search);
        const data = await resp.json();
        setData(data);
    };

    const updateSearch = (search) => {
        setSearch(search);
    };

    const renderItem = ({ item }) => (
        <TouchableOpacity
            style={styles.item}
            onPress={() =>
                navigation.reset({
                    routes: [
                        { name: "AppTabsNavigator" },
                        {
                            name: "MovieScreen",
                            params: { movie: item },
                        },
                    ],
                })
            }
        >
            <Text style={styles.title}>{item.name}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={[styles.container, styles.marginTop]}>
            <SearchBar
                placeholder="Поиск..."
                onChangeText={updateSearch}
                value={search}
                inputStyle={styles.input}
            />
            <Divider
                style={styles.divider}
                width={1}
                color="rgb(218, 220, 224)"
            />
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
};

export default AutocompleteScreen;

const styles = StyleSheet.create({
    marginTop: {
        marginTop: StatusBar.currentHeight,
    },
    container: {
        flex: 1,
        marginHorizontal: 16,
    },
    divider: {
        height: 1,
    },
    item: {
        justifyContent: "center",
        marginVertical: 5,
        minHeight: 48,
    },
    title: {
        fontSize: 16,
        color: "#202124",
        marginLeft: 60,
        marginRight: 45,
    },
    input: {
        fontSize: 16,
        color: "#202124",
    },
});
