import {
    FlatList,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import React, { useEffect, useState } from "react";
import FakeSearch from "../components/FakeSearch";
import Poster from "../components/Poster";
import { URL_SEARCH } from "../utils/constant";

const SearchScreen = ({ navigation, route }) => {
    const [search, setSearch] = useState(route?.params?.search || "");
    const [page, setPage] = useState(0);
    const [isLoading, setLoading] = useState(false);
    const [isEnd, setEnd] = useState(false);
    const [data, setData] = useState([]);

    // async function fetchData() {
    //     if (isEnd) return;

    //     const resp = await fetch(URL_SEARCH + search);
    //     const json = await resp.json();

    //     if (json == []) {
    //         setEnd(true);
    //         return;
    //     }
    //     setData([...data, ...json]);
    // }

    const fetchData = async () => {
        if (isEnd) return;

        try {
            const verifiedSearch = search.replace("?", "");

            const response = await fetch(
                URL_SEARCH + encodeURI(verifiedSearch) + "?page=" + page
            );
            const json = await response.json();
            if (!json.length) {
                setEnd(true);
                return;
            }
            setData([...data, ...json]);
            setPage((page) => {
                console.log(page++);
                return page++;
            });
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    const onEndReached = () => {
        fetchData();
    };

    useEffect(() => {
        console.log("useEffect");
        fetchData();
    }, [search]);

    const renderItem = ({ item }) => (
        <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.navigate("MovieScreen", { movie: item })}
        >
            <Poster img={item.img} />
            <Text style={styles.title}>{item.name}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <FakeSearch text={search} />
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item._id}
                numColumns={3}
                contentContainerStyle={styles.list}
                onEndReached={onEndReached}
                onEndReachedThreshold={0.1}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
};

export default SearchScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10,
        marginBottom: 0,
        marginTop: StatusBar.currentHeight + 10,
    },
    item: {
        flex: 1 / 3,
        margin: 5,
    },
    list: {},
});
