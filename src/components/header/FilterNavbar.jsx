import React from 'react';
import { Link } from 'react-router-dom';

export default function FilterNavbar() {
    return (
        <nav className="navbar navbar-expand-lg" id="second-navbar" style={{ padding: '0', paddingLeft: '5%', paddingRight: '5%' }}>
            <h5 className="navbar-brand header-text header-text-head" style={{ margin: '0', borderRight: '2px solid gray' }}>Filters</h5>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <i className="fa-solid fa-burger"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup" style={{ margin: '0' }}>
                <div className="navbar-nav d-flex justify-content-between w-100 mx-5">
                    <Link className="nav-item nav-link header-text smaller-font active-menu" to="#">Home</Link>
                    <Link className="nav-item nav-link header-text smaller-font" to="#">Features</Link>
                    <Link className="nav-item nav-link header-text smaller-font" to="#">Pricing</Link>
                </div>
            </div>
        </nav>
    );
}
