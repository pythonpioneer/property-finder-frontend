import React from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';
import { Link } from 'react-router-dom';


export default function UserDetails() {
    return (
        <>
            <div className="card user-card">
                <div className="card-header" style={{ borderRadius: '27px 27px 0 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div className='ml-3' style={{ backgroundColor: 'transparent' }}>User Details</div>
                    <Link to="/">
                        <i className="fa-solid fa-xmark mr-4" style={{ fontSize: '22px', margin: '0', backgroundColor: 'transparent', color: '#fcee9b' }}></i>
                    </Link>
                </div>

                <div className='d-flex' style={{ borderRadius: '0 0 27px 27px' }}>
                    <div className="card-body user-card-body ml-3">
                        <h3 className="card-title">Hritik Kumar Sinha</h3>
                        <p className="text-bold">Email: hrk@gmail.com</p>
                        <p className="text-bold">Contact Number: 98765432109</p>
                        <p className="text-bold">Role: Tenant</p>
                        <a href="#" className="btn btn-primary">Update Informations</a>
                    </div>
                    <div className='mr-5 mt-4 text-bold'>
                        <p>User Joined: Wed 17 Apr 8:25 PM</p>
                        <p>User Joined: Wed 17 Apr 8:25 PM</p>
                    </div>
                </div>
            </div>
        </>
    )
}
