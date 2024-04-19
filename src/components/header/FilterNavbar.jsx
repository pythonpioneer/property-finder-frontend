import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setSearch } from '../../features/propertySlice';


export default function FilterNavbar() {

    // to store the search value
    const searchRef = useRef(null);
    const dispatch = useDispatch()

    // to handle search functionality
    const handleSearch = () => {
        dispatch(setSearch(searchRef.current.value));
    }

    return (
        <nav className="navbar navbar-expand-lg sticky-top" id="second-navbar" style={{ padding: '0', paddingLeft: '5%', paddingRight: '5%' }}>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <i className="fa-solid fa-burger"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup" style={{ margin: '0' }}>
                <div className="navbar-nav d-flex justify-content-between w-100 mx-5 mt-2">

                    <div className="nav-item dropdown d-flex" style={{ position: 'relative' }}>
                        <div className="nav-item dropdown" style={{ position: 'relative' }}>
                            <span className="nav-link header-text smaller-font active-menu" to="#" id="propertyDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Property
                            </span>
                            <div className="dropdown-menu" aria-labelledby="propertyDropdown" style={{ backgroundColor: '#b2b2b2', position: '', top: '28px', left: '0px', zIndex: '99', borderWidth: '0px 2px 2px 2px', borderTop: '0px', borderRadius: '0 0 10px 10px' }}>
                                <Link className="dropdown-item" to="/" style={{ backgroundColor: 'transparent' }}>All Property</Link>
                                <Link className="dropdown-item" to="/my-properties" style={{ backgroundColor: 'transparent' }}>My Property</Link>
                                {/* <Link className="dropdown-item" to="/liked-properties" style={{ backgroundColor: 'transparent' }}>Liked Property</Link>*/} {/* future implementations */}
                                <Link className="dropdown-item" to="/add-property" style={{ backgroundColor: 'transparent' }}>Add property</Link>
                            </div>
                        </div>

                        <div className="nav-item dropdown" style={{ position: 'relative' }}>
                            <span className="nav-link header-text smaller-font active-menu ml-3" to="#" id="propertyDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Filters
                            </span>
                            <div className="dropdown-menu" aria-labelledby="propertyDropdown" style={{ width: '400px', backgroundColor: '#b2b2b2', position: '', top: '28px', left: '0px', zIndex: '99', borderWidth: '0px 2px 2px 2px', borderTop: '0px', borderRadius: '0 0 10px 10px' }}>
                                <div className='p-3'>
                                    <div style={{ flex: 1 }}>
                                        <label htmlFor="propertyType"><strong>Property Type:</strong></label>
                                        <br />
                                        <input type="radio" id="1bhk" name="propertyType" value="1bhk" /> <label htmlFor="1bhk">1 BHK</label>
                                        <input type="radio" id="2bhk" name="propertyType" value="2bhk" /> <label htmlFor="2bhk">2 BHK</label>
                                        <input type="radio" id="3bhk" name="propertyType" value="3bhk" /> <label htmlFor="3bhk">3 BHK</label>
                                        <input type="radio" id="4bhk" name="propertyType" value="4bhk" /> <label htmlFor="4bhk">4+ BHK</label>
                                    </div>
                                    <div style={{ flex: 1 }}>
                                        <label htmlFor="preferredTenant"><strong>Preferred Tenant:</strong></label>
                                        <br />
                                        <input type="checkbox" id="boys" name="preferredTenant" value="boys" /> <label htmlFor="boys">Boys</label>
                                        <input type="checkbox" id="girls" name="preferredTenant" value="girls" /> <label htmlFor="girls">Girls</label>
                                        <input type="checkbox" id="studio" name="preferredTenant" value="studio" /> <label htmlFor="studio">Studio</label>
                                        <input type="checkbox" id="couples" name="preferredTenant" value="couples" /> <label htmlFor="couples">Couples</label>
                                        <input type="checkbox" id="family" name="preferredTenant" value="family" /> <label htmlFor="family">Family</label>
                                    </div>
                                    <div style={{ flex: 1 }}>
                                        <label htmlFor="priceRange"><strong>Price Range:</strong></label>
                                        <br />
                                        <div className="mb-3">
                                            <input type="number" className="form-control mb-2" placeholder="min" />
                                            <span> to </span>
                                            <input type="number" className="form-control mb-2" placeholder="max" />
                                        </div>
                                    </div>
                                    <div style={{ flex: 1 }}>
                                        <label htmlFor="location">Location:</label>
                                        <br />
                                        <div className="mb-3">
                                            <input type="text" className="form-control mb-2" placeholder="Sector" />
                                            <span> to </span>
                                            <input type="text" className="form-control mb-2" placeholder="City" />
                                        </div>
                                    </div>
                                    <div style={{ flex: 1 }}>
                                        <button className="btn btn-primary" onClick={handleSearch}>Apply Filters</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <input type="text" ref={searchRef} style={{ width: '130px', backgroundColor: '#8f8f8f', marginRight: '20px', borderRadius: '20px', padding: '1px', paddingLeft: '10px', boxShadow: '1px 1px #b2b2b2' }} />
                        <i className="fa-solid fa-magnifying-glass" onClick={handleSearch} style={{ fontSize: '18px' }}></i>
                    </div>

                </div>
            </div>
        </nav>
    );
}
