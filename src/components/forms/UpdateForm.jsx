import React, { useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import '../../App.css';
import { fetchUserInfo, updateContact, updateUserType } from '../../services/user';
import LoggingUser from '../loader/LoggingUser';


export default function UpdationForm() {

    // to store the form data
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const contactRef = useRef(null);
    const tenantRef = useRef(null);
    const ownerRef = useRef(null);

    // hooks to call actions and navigate
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { isLoading, userInfo } = useSelector(state => state.user);

    // to handle the form
    const handleFormSubmit = (e) => {
        e.preventDefault();

        // push only updated data
        const formData = {};
        let isUpdated = false;

        // check that how many fields updated
        if (nameRef.current.value !== userInfo.name) formData.name = nameRef.current.value;
        if (emailRef.current.value !== userInfo.email) formData.email = emailRef.current.value;
        if (contactRef.current.value !== userInfo.contactNumber) formData.contactNumber = contactRef.current.value;

        // if there is any fields to be updated
        if (Object.keys(formData).length) {

            // contact updated
            isUpdated = true;

            // update teh contact of the user
            dispatch(updateContact(formData))
                .then(status => {

                    // if user updated successfully
                    if (status.type === 'updateContact/fulfilled') {
                        navigate('/user');
                    }
                });
        }

        // check that the user updated the user type field
        const updatedUserType = tenantRef.current.checked ? 'tenant' : 'owner';

        // if user updated
        if (userInfo.userType !== updatedUserType) {
            
            // type updated
            isUpdated = true;

            // update the user type
            dispatch(updateUserType({ userType: updatedUserType }))
                .then(status => {

                    // if user updated successfully
                    if (status.type === 'updateUserType/fulfilled') {
                        navigate('/user');
                    }
                });
        }

        // a message that there is nothing to update
        !isUpdated && toast.info("Nothing to udpate");
    }

    // fetch the user details
    useEffect(() => {
        if (userInfo.name === "...") {

            // then make the api call to fetch the user details
            dispatch(fetchUserInfo());
        }

    }, [dispatch, userInfo.name])

    // Set form values after userInfo is fetched
    useEffect(() => {

        // if the data already not fetched
        if (userInfo.name !== "...") {
            nameRef.current.value = userInfo.name;
            emailRef.current.value = userInfo.email;
            contactRef.current.value = userInfo.contactNumber;

            // Check radio button based on user type
            if (userInfo.userType === "tenant") {
                tenantRef.current.checked = true;
            } else if (userInfo.userType === "owner") {
                ownerRef.current.checked = true;
            }
        }
    }, [userInfo]);

    return (
        <div className="container">
            <div className="row justify-content-center align-items-center">
                <div className="col-md-4">

                    <div className="card card-design">
                        <div className="card-body pb-5">
                            <h5 className="card-title text-center mb-4 font-weight-bold">Update Informations</h5>

                            <form onSubmit={handleFormSubmit}>
                                <div className="mb-3">
                                    <input ref={nameRef} id="form-input" type="text" className="form-control form-input" placeholder="Full Name" autoComplete="off" required style={{ backgroundColor: 'transparent', border: 'none', outline: 'none', resize: 'none', boxShadow: 'none', borderBottom: '1px solid black', color: 'black' }} />
                                </div>
                                <div className="mb-3">
                                    <input ref={emailRef} type="email" className="form-control" placeholder="Email" autoComplete="off" required style={{ backgroundColor: 'transparent', border: 'none', outline: 'none', resize: 'none', boxShadow: 'none', borderBottom: '1px solid black', color: 'black' }} />
                                </div>
                                <div className="mb-3">
                                    <input ref={contactRef} type="tel" className="form-control" placeholder="Contact Number" autoComplete="off" required style={{ backgroundColor: 'transparent', border: 'none', outline: 'none', resize: 'none', boxShadow: 'none', borderBottom: '1px solid black', color: 'black' }} />
                                </div>
                                <div className="mb-3 d-flex justify-content-between">
                                    <label className="radio-label">
                                        <input ref={tenantRef} type="radio" name="user-role" value="tenant" className='mx-2 my-2' />
                                        Tenant
                                    </label>
                                    <label className="radio-label mr-2">
                                        <input ref={ownerRef} type="radio" name="user-role" value="owner" className='mx-2 my-2' />
                                        Owner
                                    </label>
                                </div>
                                <button type="submit" className="btn btn-primary w-100">Update</button>
                            </form>

                            {isLoading && <LoggingUser />}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
