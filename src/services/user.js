// importing all requirements
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { PATH } from '../constants';
import { toast } from "react-toastify";


// fetch constant variables like the url and the url path
const URL = process.env.REACT_APP_URL;
const APIPATH = PATH;  // '/api/v1/'

// to register the user
const registerUser = createAsyncThunk('registerUser', async (formData) => {

    // now, make the api call to register the user
    return axios.post(`${URL}${APIPATH}user/register`,
        JSON.stringify(formData),
        {
            headers: {
                "Content-Type": "application/json",
            },
        })
        .then(response => {  // user registered in successfully
            toast.success(response?.data?.message || "Logged in!!"); 
            return;
        })
        .catch(err => {  // to handle errors
            toast.error(err?.response?.data?.message || "Failed!!")
            throw err;
        });
});

// to register the user
const signInUser = createAsyncThunk('signInUser', async (formData) => {

    // now, make the api call to login the user
    return axios.post(`${URL}${APIPATH}user/login`,
        JSON.stringify(formData),
        {
            headers: {
                "Content-Type": "application/json",
            },
        })
        .then(response => {  // user logged in successfully
            toast.success(response?.data?.message || "Logged in!!");

            // save the liked properties array and token in the browser
            localStorage.setItem('liked-properties', response.data.likedProperties);
            localStorage.setItem('auth-token', response.data['auth-token']);
            return response.data;
        })
        .catch(err => {  // to handle errors
            toast.error(err?.response?.data?.message || "Failed!!")
            throw err;
        });
});

// to fetch the details of logged in user
const fetchUserInfo = createAsyncThunk('fetchUserInfo', async () => {

    // fetch the auth token from local storage
    const token = localStorage.getItem('auth-token');

    // now, make the api call to fetch the logged in user
    return axios.get(`${URL}${APIPATH}user/`, {
        headers: {
            "auth-token": token,
        },
    })
        .then(response => response.data)
        .catch(err => {  // if we encounter any errors
            throw err;
        });
});

// to update the user's contact details like email, name and contact number
const updateContact = createAsyncThunk('updateContact', async (formData) => {

    // fetch the auth token from local storage
    const token = localStorage.getItem('auth-token');

    // now, make the api call to update user's contact
    return axios.patch(`${URL}${APIPATH}user/contact`,
        JSON.stringify(formData),
        {
            headers: {
                "Content-Type": "application/json",
                "auth-token": token,
            },
        })
        .then(response => {  // user updated in successfully
            toast.success(response?.data?.message || "Logged in!!"); 
            return response.data;
        })
        .catch(err => {  // to handle errors
            toast.error(err?.response?.data?.message || "Failed!!")
            throw err;
        });
});

// to update the user type
const updateUserType = createAsyncThunk('updateUserType', async (formData) => {

    // fetch the auth token from local storage
    const token = localStorage.getItem('auth-token');

    // now, make the api call to update user's contact
    return axios.patch(`${URL}${APIPATH}user/type`,
        JSON.stringify(formData),
        {
            headers: {
                "Content-Type": "application/json",
                "auth-token": token,
            },
        })
        .then(response => {  // user updated in successfully
            toast.success(response?.data?.message || "Logged in!!"); 
            return response.data;
        })
        .catch(err => {  // to handle errors
            toast.error(err?.response?.data?.message || "Failed!!");
            throw err;
        });

});

// to like the property
const likeProperty = createAsyncThunk('likeProperty', async (propertyId) => {

    // fetch the auth token from local storage
    const token = localStorage.getItem('auth-token');

    // set the headers for the request
    const config = {
        headers: {
            'auth-token': token,
        },
    };

    // now, like the property
    return axios.patch(`${URL}${APIPATH}user/${propertyId}/like`, {}, config)
        .then(response => {

            // save the liked properties array into browser
            localStorage.setItem('liked-properties', response.data.likedProperties);
            return response.data;
        })
        .catch(err => {  // to handle errors
            toast.error(err?.response?.data?.message || "Failed!!");
            throw err;
        });

});


export { registerUser, signInUser, fetchUserInfo, updateContact, updateUserType, likeProperty };