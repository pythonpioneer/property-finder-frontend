import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';

const PropertyForm = () => {

    const descRef = useRef(null);
    const areaRef = useRef(null);
    const imageRef = useRef(null);

    const handleForm = (e) => {
        e.preventDefault();
        console.log(imageRef.current.value)
    }

    return (
        <>
            <div className="card user-card">
                <div className="card-header" style={{ borderRadius: '27px 27px 0 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div className='ml-3' style={{ backgroundColor: 'transparent' }}>User Details</div>
                    <Link to="/">
                        <i className="fa-solid fa-xmark mr-4" style={{ fontSize: '22px', margin: '0', backgroundColor: 'transparent', color: '#fcee9b' }}></i>
                    </Link>
                </div>

                <div className='d-flex' style={{ borderRadius: '0 0 27px 27px', padding: '10px' }}>
                    <div className="card-body user-card-body ml-3">
                        <form onSubmit={handleForm}>
                            <div className="form-group">
                                <label htmlFor="desc">Description:</label>
                                <textarea ref={descRef} className="form-control" id="desc" rows="3"></textarea>
                            </div>
                            <div className="form-group">
                                <label htmlFor="images">Images:</label>
                                <input ref={imageRef} type="file" className="form-control-file" id="images" multiple />
                            </div>
                            <div className="form-group">
                                <label htmlFor="area">Area:</label>
                                <input ref={areaRef} type="number" className="form-control" id="area" />
                            </div>
                            <div className="d-flex justify-content-between">
                                <button type="button" className="btn btn-secondary">Previous</button>
                                <button type="submit" className="btn btn-primary">Next</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PropertyForm;
