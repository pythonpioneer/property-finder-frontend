import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchUserInfo } from '../../services/user';


export default function UserDetails() {

    // select the user details from the store
    const { userInfo } = useSelector(state => state.user);
    const dispatch = useDispatch();

    // fetch the user details
    useEffect(() => {
        if (userInfo.name === "...") {

            // then make the api call to fetch the user details
            dispatch(fetchUserInfo());
        }

    }, [dispatch, userInfo.name])


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
                        <h3 className="card-title">{userInfo.name}</h3>
                        <p className="text-bold">Email: {userInfo.email}</p>
                        <p className="text-bold">Contact Number: {userInfo.contactNumber}</p>
                        <p className="text-bold">Role: {userInfo.userType}</p>
                        <Link to="/update" className="btn btn-primary">Update Informations</Link>
                    </div>
                    <div className='mr-5 mt-4 text-bold'>
                        <p>&nbsp;&nbsp;User Joined: {userInfo.createdAt}</p>
                        <p>Last Updated: {userInfo.updatedAt}</p>
                    </div>
                </div>
            </div>
        </>
    )
}
