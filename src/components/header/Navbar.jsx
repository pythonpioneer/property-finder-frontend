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
				<Link className="navbar-brand" to="/" style={{ fontSize: "30px", color: '#fcee9b' }}>
					Impactmindz
				</Link>

				<div style={{ display: 'flex', backgroundColor: 'transparent' }}>

					{/* to login and log out the users */}
					{isLoggedIn
						? <div onClick={handleLogout} className="navbar-brand" id="navbar-logout" style={{ fontSize: "15px", color: '#fcee9b' }}>
							Logout
						</div>
						: <Link className="navbar-brand" id="navbar-login" to="/login" style={{ fontSize: "15px", color: '#fcee9b' }}>
							Login/Signup
						</Link>
					}
					<Link to='/user'>
						<i className="fa-solid fa-user sa" style={{ fontSize: '28px', backgroundColor: 'transparent', marginRight: '12px', color: '#b9b9b9' }}></i>
					</Link>
				</div>
			</nav>

		</>
	)
}
