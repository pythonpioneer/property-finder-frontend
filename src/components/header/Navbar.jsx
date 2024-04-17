import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logoutUser } from '../../features/userSlice';


export default function Navbar() {

	// select the user logged in state
	const { isLoggedIn } = useSelector(state => state.user);
	const dispatch = useDispatch();

	// to logout the user
	const handleLogout = () => {
		dispatch(logoutUser());
	}


	return (
		<>
			{/* Image and text */}
			<nav className="navbar navbar-bg-color" style={{ padding: "0", paddingLeft: "5%", paddingRight: "4%" }}>
				<a className="navbar-brand" href="/" style={{ fontSize: "30px", color: '#fcee9b' }}>
					Impactmindz
				</a>

				{/* to login and log out the users */}
				{isLoggedIn
				? <div onClick={handleLogout} className="navbar-brand" id="navbar-logout"  style={{ fontSize: "15px", color: '#fcee9b' }}>
					Logout
				</div>
				: <Link className="navbar-brand" id="navbar-login" to="/register" style={{ fontSize: "15px", color: '#fcee9b' }}>
					Login/Signup
				</Link>}
			</nav>

		</>
	)
}
