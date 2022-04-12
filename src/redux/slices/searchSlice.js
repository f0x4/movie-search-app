import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { search } from "../../api/requests/search";

const initialState = {
    data: [],
    page: 0,
    isEnd: false,
    status: "idle",
    error: null,
};

export const searchAsync = createAsyncThunk(
    "api/search",
    async (query, { getState }) => {
        const { page, isEnd } = getState().search;

        if (isEnd) return;

        const data = await search(query, page);
        return data;
    },
    {
        condition: (_, { getState }) => {
            const { status } = getState().search;

            if (status === "succeeded" || status === "loading") {
                // Already fetched or in progress, don't need to re-fetch
                return false;
            }
        },
    }
);

export const searchSlice = createSlice({
    name: "search",
    initialState,
    reduser: {
        clearData: (state) => {
            state.data = [];
        },
        setEnd: (state, action) => {
            state.isEnd = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(searchAsync.pending, (state) => {
                state.status = "loading";
            })
            .addCase(searchAsync.fulfilled, (state, action) => {
                state.status = "succeeded";
                if (state.isEnd) return;
                if (!action.payload.length) {
                    state.isEnd = true;
                    return;
                }
                state.page++;
                state.data.push(...action.payload);
                state.status = "idle";
            })
            .addCase(searchAsync.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });
    },
});

export const { clearData, setEnd } = searchSlice.actions;

export const getData = (state) => state.search.data;
export const getStatus = (state) => state.search.status;
export const getIsEnd = (state) => state.search.isEnd;

export default searchSlice.reducer;
