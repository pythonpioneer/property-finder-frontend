// importing all requirements
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { PATH } from '../constants';
import { toast } from "react-toastify";


// fetch constant variables like the url and the url path
const URL = process.env.REACT_APP_URL;
const APIPATH = PATH;  // '/api/v1/'

// to add a new property
const addProperty = createAsyncThunk('addProperty', async () => {

    // fetch the auth token from local storage
    const token = localStorage.getItem('auth-token');

    // now, make the api call to add a new property
    return axios.post(`${URL}${APIPATH}property/`, {
        headers: {
            "Content-Type": "application/json",
            "auth-token": token,
        },
    })
        .then(response => {
            console.log("added")
        })
        .catch(err => {
            console.error("error", err)
        })
});

// export function
export { addProperty }