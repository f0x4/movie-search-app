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
import { useDispatch, useSelector } from "react-redux";
import {
    autocompleteAsync,
    clearData,
    getData,
} from "../redux/slices/autocompleteSlice";
import { clearSearchData } from "../redux/slices/searchSlice";
import PosterMini from "../components/PosterMini";

const AutocompleteScreen = ({ route }) => {
    const text = route?.params?.text;
    const [search, setSearch] = useState("" || text);
    const data = useSelector(getData);
    const debouncedSearch = useDebounce(search, 800);

    const dispatch = useDispatch();
    const navigation = useNavigation();

    useEffect(async () => {
        if (search.length <= 2) {
            dispatch(clearData());
            return;
        }
        dispatch(autocompleteAsync(search));
    }, [debouncedSearch]);

    const updateSearch = (search) => {
        setSearch(search);
    };

    const renderItem = ({ item }) => (
        <TouchableOpacity
            style={styles.item}
            onPress={() => {
                dispatch(clearSearchData());
                navigation.reset({
                    routes: [
                        { name: "AppTabsNavigator" },
                        {
                            name: "SearchScreen",
                            params: { search: item.name },
                        },
                    ],
                });
            }}
        >
            <PosterMini width={46} img={item.img} />
            <View style={styles.textContainer}>
                <Text style={styles.title} ellipsizeMode="tail">
                    {item.name}
                </Text>
                <Text style={styles.subtitle}>
                    {item.isSeries ? "Сериал" : "Фильм"}
                    {", "}
                    {item.year}
                </Text>
            </View>
        </TouchableOpacity>
    );

    const onSubmitEditing = () => {
        dispatch(clearSearchData());
        navigation.reset({
            routes: [
                { name: "AppTabsNavigator" },
                {
                    name: "SearchScreen",
                    params: { search: search },
                },
            ],
        });
    };

    return (
        <View style={[styles.container, styles.marginTop]}>
            <SearchBar
                autoFocus
                placeholder="Поиск..."
                onChangeText={updateSearch}
                value={search}
                inputStyle={styles.input}
                selectionColor={"#0060ff"}
                onSubmitEditing={onSubmitEditing}
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
                showsVerticalScrollIndicator={false}
                keyboardShouldPersistTaps="handled"
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
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 5,
        minHeight: 46,
    },
    textContainer: {
        flexShrink: 1,
        marginLeft: 13,
        marginRight: 46,
    },
    title: {
        fontSize: 16,
        color: "#202124",
    },
    subtitle: {
        fontSize: 12,
        color: "#767676",
    },
    input: {
        fontSize: 16,
        color: "#202124",
    },
});
