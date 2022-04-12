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
            onPress={() =>
                navigation.reset({
                    routes: [
                        { name: "AppTabsNavigator" },
                        {
                            name: "SearchScreen",
                            params: { search: item.name },
                        },
                    ],
                })
            }
        >
            <Text style={styles.title}>{item.name}</Text>
        </TouchableOpacity>
    );

    const onSubmitEditing = () => {
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
        justifyContent: "center",
        marginVertical: 5,
        minHeight: 46,
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
