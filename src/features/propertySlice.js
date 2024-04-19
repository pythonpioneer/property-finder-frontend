// importing requirements
import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { fetchAllProperty, fetchMyProperty, fetchLikedProperty } from "../services/property";


// global states of properties
const initialState = {
    properties: [],
    myProperties: [],
    likedProperties: [],
    isLoading: false,
    hasErrors: false,
    totalProperties: 0,
    currPage: 2,

    // to handle search and filters
    searchText: '',
};

// now, create the slice obj
const propertySlice = createSlice({
    name: 'property',
    initialState,
    reducers: {
        setCurrPage: (state, action) => {
            state.currPage = action.payload;
        },
        setTotalProperties: (state, action) => {
            state.totalProperties = action.payload;
        },
        removeAllProperties: (state) => {  // generally used, when user logged out
            state.properties = [];
        },
    },
    extraReducers: (builder) => {
        builder
            // fetching all properties
            .addCase(fetchAllProperty.pending , (state) => {
                state.isLoading = true;
                state.hasErrors = false;
            })
            .addCase(fetchAllProperty.fulfilled , (state, action) => {
                state.isLoading = false;
                state.hasErrors = false;
                state.properties = action.payload?.properties;
            })
            .addCase(fetchAllProperty.rejected , (state, action) => {
                state.hasErrors = true;
                state.isLoading = false;
            })

            // fetching my properties
            .addCase(fetchMyProperty.pending , (state) => {
                state.isLoading = true;
                state.hasErrors = false;
            })
            .addCase(fetchMyProperty.fulfilled , (state, action) => {
                state.isLoading = false;
                state.hasErrors = false;
                state.myProperties = action.payload?.properties;
            })
            .addCase(fetchMyProperty.rejected , (state, action) => {
                state.hasErrors = true;
                state.isLoading = false;
            })

            // fetching my properties
            .addCase(fetchLikedProperty.pending , (state) => {
                state.isLoading = true;
                state.hasErrors = false;
            })
            .addCase(fetchLikedProperty.fulfilled , (state, action) => {
                state.isLoading = false;
                state.hasErrors = false;
                state.likedProperties = action.payload?.properties;
            })
            .addCase(fetchLikedProperty.rejected , (state, action) => {
                state.hasErrors = true;
                state.isLoading = false;
            })
    }
});


// now export the reducers and actions
export const { setCurrPage, setTotalProperties, removeAllProperties } = propertySlice.actions;
export default propertySlice.reducer;