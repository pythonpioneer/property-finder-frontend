import React from 'react';


export default function Navbar() {
	return (
		<>
			{/* Image and text */}
			<nav className="navbar navbar-bg-color" style={{ padding: "0", paddingLeft: "5%", paddingRight: "4%" }}>
				<a className="navbar-brand" href="/" style={{ fontSize: "30px", color: '#fcee9b' }}>
					Impactmindz
				</a>
				<a className="navbar-brand" id="navbar-login" href="/" style={{ fontSize: "15px", color: '#fcee9b' }}>
					Login/Signup
				</a>
			</nav>

		</>
	)
}
