import React from 'react';
import { Link } from 'react-router-dom';

export default function FilterNavbar() {
    return (
        <nav className="navbar navbar-expand-lg sticky-top" id="second-navbar" style={{ padding: '0', paddingLeft: '5%', paddingRight: '5%' }}>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <i className="fa-solid fa-burger"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup" style={{ margin: '0' }}>
                <div className="navbar-nav d-flex justify-content-between w-100 mx-5 mt-2">
                    <div className="nav-item dropdown" style={{ position: 'relative' }}>
                        <span className="nav-link header-text smaller-font active-menu" to="#" id="propertyDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Property
                        </span>
                        <div className="dropdown-menu" aria-labelledby="propertyDropdown" style={{ backgroundColor: '#b2b2b2', position: '', top: '28px', left: '0px', zIndex: '99', borderWidth: '0px 2px 2px 2px', borderTop: '0px', borderRadius: '0 0 10px 10px' }}>
                            <Link className="dropdown-item" to="/" style={{ backgroundColor: 'transparent' }}>All Property</Link>
                            <Link className="dropdown-item" to="#" style={{ backgroundColor: 'transparent' }}>Liked Property</Link>
                            <Link className="dropdown-item" to="/add-property" style={{ backgroundColor: 'transparent' }}>Add property</Link>
                        </div>
                    </div>

                    <div className="nav-item dropdown" style={{ position: 'relative' }}>
                        <span className="nav-link header-text smaller-font active-menu" to="#" id="propertyDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Property
                        </span>
                        <div className="dropdown-menu" aria-labelledby="propertyDropdown" style={{ backgroundColor: '#b2b2b2', position: '', top: '28px', left: '0px', zIndex: '99', borderWidth: '0px 2px 2px 2px', borderTop: '0px', borderRadius: '0 0 10px 10px' }}>
                            <Link className="dropdown-item" to="#" style={{ backgroundColor: 'transparent' }}>All Property</Link>
                            <Link className="dropdown-item" to="#" style={{ backgroundColor: 'transparent' }}>Liked Property</Link>
                            <Link className="dropdown-item" to="#" style={{ backgroundColor: 'transparent' }}>Add property</Link>
                        </div>
                    </div>
                    <div className="nav-item dropdown" style={{ position: 'relative' }}>
                        <span className="nav-link header-text smaller-font active-menu" to="#" id="propertyDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Property
                        </span>
                        <div className="dropdown-menu" aria-labelledby="propertyDropdown" style={{ backgroundColor: '#b2b2b2', position: '', top: '28px', left: '0px', zIndex: '99', borderWidth: '0px 2px 2px 2px', borderTop: '0px', borderRadius: '0 0 10px 10px' }}>
                            <Link className="dropdown-item" to="#" style={{ backgroundColor: 'transparent' }}>All Property</Link>
                            <Link className="dropdown-item" to="#" style={{ backgroundColor: 'transparent' }}>Liked Property</Link>
                            <Link className="dropdown-item" to="#" style={{ backgroundColor: 'transparent' }}>Add property</Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}
