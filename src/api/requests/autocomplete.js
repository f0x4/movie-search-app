import makeRequest from "../makeRequest";

export const autocomplete = (query) => {
    const cleenQuery = query.replace("?", "");

    return makeRequest({
        url: "/autocomplete/" + encodeURI(cleenQuery),
    });
};
