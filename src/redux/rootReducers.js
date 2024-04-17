// importing requirements
import { combineReducers } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';


// now combine all the reducers
const rootReducer = combineReducers({
    user: userReducer,
    // list all reducers
});

// export the reducers
export default rootReducer;