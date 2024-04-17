import { createSlice } from "@reduxjs/toolkit";
import { registerUser, signInUser } from "../services/user";


// initial global state of the application
const initialState = {
    isLoggedIn: false,
    isLoading: false,
    hasErrors: false,
}

// now create the user slice
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        loginUser: (state) => {  // if there is authentication token in the local storage then logged in the user
            state.isLoggedIn = Boolean(localStorage?.getItem('auth-token'));
        },
    },
    extraReducers: (builder) => {
        builder
            // to register the user
            .addCase(registerUser.pending, (state) => {  // during api calls
                state.isLoading = true;
            })
            .addCase(registerUser.fulfilled, (state, action) => {  // after successfull registration in 
                state.isLoading = false;
                state.hasErrors = false;
            })
            .addCase(registerUser.rejected, (state, action) => {  // if registration failed
                state.isLoading = false;
                state.hasErrors = true;
            })

            // to login the user
            .addCase(signInUser.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(signInUser.fulfilled, (state, action) => { 
                state.isLoading = false;
                state.hasErrors = false;
                userSlice.caseReducers.loginUser(state, action);
            })
            .addCase(signInUser.rejected, (state, action) => {
                state.isLoading = false;
                state.hasErrors = true;
            })
    }
});


// now export the reducers and actions
export const { loginUser } = userSlice.actions;
export default userSlice.reducer;