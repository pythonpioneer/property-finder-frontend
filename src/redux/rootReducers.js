// importing requirements
import { combineReducers } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';
import propertyReducer from '../features/propertySlice';


// now combine all the reducers
const rootReducer = combineReducers({
    user: userReducer,
    property: propertyReducer
    // list all reducers
});

// export the reducers
export default rootReducer;