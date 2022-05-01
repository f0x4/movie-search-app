import {
    ActivityIndicator,
    FlatList,
    StyleSheet,
    StatusBar,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import React, { useEffect, useState } from "react";
import FakeSearch from "../components/FakeSearch";
import Poster from "../components/Poster";
import { useDispatch, useSelector } from "react-redux";
import {
    getData,
    getStatus,
    getIsEnd,
    searchAsync,
    getShowIndicator,
} from "../redux/slices/searchSlice";
import { BlurView } from "expo-blur";

const SearchScreen = ({ navigation, route }) => {
    const [search, setSearch] = useState(route?.params?.search || "");
    const status = useSelector(getStatus);
    const showIndicator = useSelector(getShowIndicator);
    const data = useSelector(getData);
    const dispatch = useDispatch();

    const fetchData = () => {
        dispatch(searchAsync(search));
    };

    const onEndReached = () => {
        fetchData();
    };

    useEffect(() => {
        fetchData();
    }, [search]);

    const renderItem = ({ item }) => (
        <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.navigate("MovieScreen", { movie: item })}
        >
            <Poster img={item.img} />
            <Text style={{ textAlign: "center" }}>{item.name}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <BlurView style={styles.header} intensity={120} tint="light">
                <FakeSearch text={search} />
            </BlurView>

            {showIndicator && (
                <ActivityIndicator
                    style={styles.center}
                    size="large"
                    color="#1976d2"
                />
            )}

            <FlatList
                style={styles.list}
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
    },
    header: {
        width: "100%",
        position: "absolute",
        zIndex: 99,

        paddingTop: StatusBar.currentHeight + 7,
        paddingBottom: 7,
        paddingHorizontal: 6,
    },
    list: {
        paddingTop: StatusBar.currentHeight + 13,
    },
    item: {
        flex: 1 / 3,
        margin: 5,
    },
    center: { flex: 1, alignSelf: "center" },
});
