import { createSlice } from "@reduxjs/toolkit";


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
    }
});


// now export the reducers and actions
export const { loginUser } = userSlice.actions;
export default userSlice.reducer;