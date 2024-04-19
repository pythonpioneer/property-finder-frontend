// importing all requirements
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { PATH } from '../constants';
import { toast } from "react-toastify";


// fetch constant variables like the url and the url path
const URL = process.env.REACT_APP_URL;
const APIPATH = PATH;  // '/api/v1/'

// to add a new property
const addProperty = createAsyncThunk('addProperty', async (formData) => {

    // fetch the auth token from local storage
    const token = localStorage.getItem('auth-token');

    // set the headers for the request
    const config = {
        headers: {
            'Content-Type': 'multipart/form-data',
            'auth-token': token,
        },
    };

    // make the api call to add a new property
    return axios.post(`${URL}${APIPATH}property/`, formData, config)
        .then(response => {
            toast.success(response?.data?.message || "Data posted");
            return response.data;
        })
        .catch(err => {  // to handle errors
            toast.error(err?.response?.data?.message || "Failed!!");
            throw err;
        });
});

// to fetch all the property, login not required
const fetchAllProperty = createAsyncThunk('fetchAllProperty', async () => {

    return axios.get(`${URL}${APIPATH}property/properties`)
        .then(response => {
            return response.data;
        })
        .catch(err => {  // to handle errors
            toast.error(err?.response?.data?.message || "Failed!!");
            throw err;
        });
});

// to fetch all the property, login not required
const fetchMyProperty = createAsyncThunk('fetchMyProperty', async () => {

    // fetch the auth token from local storage
    const token = localStorage.getItem('auth-token');

    // set the headers for the request
    const config = {
        headers: {
            'Content-Type': 'multipart/form-data',
            'auth-token': token,
        },
    };

    return axios.get(`${URL}${APIPATH}user/properties`, config)
        .then(response => {
            return response.data;
        })
        .catch(err => {  // to handle errors
            toast.error(err?.response?.data?.message || "Failed!!");
            throw err;
        });
});

// to fetch liked properties
const fetchLikedProperty = createAsyncThunk('fetchLikedProperty', async () => {

    // fetch the auth token from local storage
    const token = localStorage.getItem('auth-token');

    // set the headers for the request
    const config = {
        headers: {
            'auth-token': token,
        },
    };

    // fetch the liked properties
    return axios.get(`${URL}${APIPATH}user/liked-properties`, config)
        .then(response => {
            return response.data;
        })
        .catch(err => {  // to handle errors
            toast.error(err?.response?.data?.message || "Failed!!");
            throw err;
        });
});



// export function
export { addProperty, fetchAllProperty, fetchMyProperty, fetchLikedProperty };