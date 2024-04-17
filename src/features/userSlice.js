import { createSlice } from "@reduxjs/toolkit";
import { fetchUserInfo, registerUser, signInUser, updateContact, updateUserType } from "../services/user";
import { toast } from "react-toastify";
import { formatDateTime } from "../utils";


// initial global state of the application
const initialState = {
    isLoggedIn: false,
    isLoading: false,
    hasErrors: false,

    // to store user's information
    userInfo: {
        email: "...",
        contactNumber: "...",
        name: "...",
        userType: "...",
        createdAt: "...",
        updatedAt: "...",
        _id: null
    }
}

// now create the user slice
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        loginUser: (state) => {  // if there is authentication token in the local storage then logged in the user
            state.isLoggedIn = Boolean(localStorage?.getItem('auth-token'));
        },
        logoutUser: (state) => {
            const isUserLoggedIn = Boolean(localStorage?.getItem('auth-token'));

            if (isUserLoggedIn) {
                toast.success("User Logged Out!")
                state.isLoggedIn = false;

                // remove the token from localStorage
                localStorage.clear('auth-token');
            }
            else {
                state.isLoggedIn = false;
                toast.info("User Already Logged Out.");
            }
        }
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

            // to fetch the logged in user details
            .addCase(fetchUserInfo.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchUserInfo.fulfilled, (state, action) => { 
                state.isLoading = false;
                state.hasErrors = false;
                
                // set the user details
                state.userInfo = action.payload.user;

                // set the formatted user text
                state.userInfo.updatedAt = formatDateTime(action.payload.user.updatedAt);
                state.userInfo.createdAt = formatDateTime(action.payload.user.createdAt);
            })
            .addCase(fetchUserInfo.rejected, (state, action) => {
                state.isLoading = false;
                state.hasErrors = true;
                toast.error(action.payload || "User is not Logged In");
            })

            // to update the logged in user details
            .addCase(updateContact.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(updateContact.fulfilled, (state, action) => { 
                state.isLoading = false;
                state.hasErrors = false;
                
                // set the user details
                state.userInfo = action.payload.user;

                // set the formatted user text
                state.userInfo.updatedAt = formatDateTime(action.payload.user.updatedAt);
                state.userInfo.createdAt = formatDateTime(action.payload.user.createdAt);
            })
            .addCase(updateContact.rejected, (state, action) => {
                state.isLoading = false;
                state.hasErrors = true;
            })

            // to update the logged in user details
            .addCase(updateUserType.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(updateUserType.fulfilled, (state, action) => { 
                state.isLoading = false;
                state.hasErrors = false;

                // update the user role
                state.userInfo.userType = action.payload.user.userType;

                // set the formatted user text
                state.userInfo.updatedAt = formatDateTime(action.payload.user.updatedAt);
            })
            .addCase(updateUserType.rejected, (state, action) => {
                state.isLoading = false;
                state.hasErrors = true;
            })
    }
});


// now export the reducers and actions
export const { loginUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;