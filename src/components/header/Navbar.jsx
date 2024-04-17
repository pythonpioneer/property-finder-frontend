import React from 'react';
import { Link } from 'react-router-dom';


export default function Navbar() {
	return (
		<>
			{/* Image and text */}
			<nav className="navbar navbar-bg-color" style={{ padding: "0", paddingLeft: "5%", paddingRight: "4%" }}>
				<a className="navbar-brand" href="/" style={{ fontSize: "30px", color: '#fcee9b' }}>
					Impactmindz
				</a>
				<Link className="navbar-brand" id="navbar-login" to="/register" style={{ fontSize: "15px", color: '#fcee9b' }}>
					Login/Signup
				</Link>
			</nav>

		</>
	)
}
