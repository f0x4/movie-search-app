import { configureStore } from "@reduxjs/toolkit";
import autocompleteReduser from "./slices/autocompleteSlice";
import searchReduser from "./slices/searchSlice";

export const store = configureStore({
    reducer: {
        autocomplete: autocompleteReduser,
        search: searchReduser,
    },
});
