import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import RegistrationForm from './components/forms/RegistrationForm';
import Navbar from './components/header/Navbar';
import Box from './components/body/Box';

function App() {
	return (
		<>
			<Navbar />
			<Routes>
				<Route exact path="/" element={ <Box /> } />
				<Route exact path="/register" element={ <RegistrationForm /> } />
			</Routes>
			
		</>
	);
}

export default App;
