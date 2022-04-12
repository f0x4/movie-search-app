import makeRequest from "../makeRequest";

export const search = (query, page) => {
    const cleenQuery = query.replace("?", "");

    return makeRequest({
        url: "/search/" + encodeURI(cleenQuery),
        params: `?page=${page || 0}`,
    });
};
