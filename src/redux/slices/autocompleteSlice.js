import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { autocomplete } from "../../api/requests/autocomplete";

const initialState = {
    data: [],
    status: "idle",
    error: null,
};

export const autocompleteAsync = createAsyncThunk(
    "api/autocomplete",
    async (query) => {
        const data = await autocomplete(query);
        return data;
    }
);

export const autocompleteSlice = createSlice({
    name: "autocmplete",
    initialState,
    reducers: {
        clearData: (state) => {
            state.data = [];
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(autocompleteAsync.pending, (state) => {
                state.status = "loading";
            })
            .addCase(autocompleteAsync.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.data = action.payload;
            })
            .addCase(autocompleteAsync.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });
    },
});

export const { clearData } = autocompleteSlice.actions;

export const getData = (state) => state.autocomplete.data;

export default autocompleteSlice.reducer;
