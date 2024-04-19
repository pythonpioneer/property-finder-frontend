import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom'; // Use Navigate from react-router-dom
import RegistrationForm from './components/forms/RegistrationForm';
import Navbar from './components/header/Navbar';
import Box from './components/body/Box';
import LoginForm from './components/forms/LoginForm';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser, setLikedProperties } from './features/userSlice';
import UserDetails from './components/app/UserDetails';
import UpdationForm from './components/forms/UpdateForm';
import FilterNavbar from './components/header/FilterNavbar';
import AddPropertyForm from './components/forms/AddPropertyForm';


function App() {
    const dispatch = useDispatch();
    const { isLoggedIn } = useSelector(state => state.user);

    // Dispatch loginUser action on component mount to check login status
    useEffect(() => {
        dispatch(loginUser());
        dispatch(setLikedProperties());
    }, [dispatch]);

    return (
        <>
            <Navbar />
            <FilterNavbar />
            <Routes>
                {/* Allow access to all users */}
                <Route exact path="/" element={<Box />} />

                {/* Allow access to logged-out users only */}
                <Route exact path="/register" element={!isLoggedIn ? <RegistrationForm /> : <Navigate to="/" />} />
                <Route exact path="/login" element={!isLoggedIn ? <LoginForm /> : <Navigate to="/" />} />
                
                {/* Protect routes for logged-in users */}
                <Route path="/user" element={isLoggedIn ? <UserDetails /> : <Navigate to="/login" />} />
                <Route path="/update" element={isLoggedIn ? <UpdationForm /> : <Navigate to="/login" />} />
                <Route path="/add-property" element={isLoggedIn ? <AddPropertyForm /> : <Navigate to="/login" />} />
                <Route path="/my-properties" element={isLoggedIn ? <Box type={"my"} /> : <Navigate to="/login" />} />
                <Route path="/liked-properties" element={isLoggedIn ? <Box type={"liked"} /> : <Navigate to="/login" />} />

            </Routes>
        </>
    );
}

export default App;
