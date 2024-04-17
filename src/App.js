import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import RegistrationForm from './components/forms/RegistrationForm';
import Navbar from './components/header/Navbar';
import Box from './components/body/Box';
import LoginForm from './components/forms/LoginForm';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from './features/userSlice';
import UserDetails from './components/app/UserDetails';


function App() {

	// to call the actions
	const dispatch = useDispatch();

	// to check that the user is loggedin or not, after page refresh
	useEffect(() => {
		dispatch(loginUser());
	})

	return (
		<>
			<Navbar />
			<Routes>
				<Route exact path="/" element={ <Box /> } />
				<Route exact path="/register" element={ <RegistrationForm /> } />
				<Route exact path="/login" element={ <LoginForm /> } />
				<Route exact path="/user" element={ <UserDetails /> } />
			</Routes>
		</>
	);
}

export default App;
