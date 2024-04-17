import React from 'react'

export default function FilterNavbar() {
    return (
        <>
            {/* Second Navbar */}
            <nav className="navbar body-bg-color" id="second-navbar" style={{ padding: "0", paddingLeft: "5%", paddingRight: "4%" }}>
                <a className="navbar-brand" href="#">
                    All Properties
                </a>
                <a className="navbar-brand" href="#">
                    Liked Properties
                </a>
                <a className="navbar-brand" href="#">
                    More filters
                </a>
            </nav>
        </>
    )
}
