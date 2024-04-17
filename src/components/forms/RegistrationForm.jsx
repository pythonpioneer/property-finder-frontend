import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import '../../App.css';
import { registerUser } from '../../services/user';
import LoggingUser from '../loader/LoggingUser';


export default function RegistrationForm() {

    // to store the form data
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const contactRef = useRef(null);
    const passwordRef = useRef(null);

    // hooks to call actions and navigate
    // const navigate = useNavigate();
    const dispatch = useDispatch();
    const { isLoading } = useSelector(state => state.user);

    // to handle the form
    const handleFormSubmit = (e) => {
        e.preventDefault();

        const formData = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            contactNumber: contactRef.current.value,
            password: passwordRef.current.value,
        };

        // now, submit the data and dispatch the action
        dispatch(registerUser(formData))
            .then(status => {

                // if user created successfully
                if (status.type === 'registerUser/fulfilled') {
                    setTimeout(() => {
                        // navigate('/');
                    }, 0);
                }
            })
            .catch();
    }

    return (
        <div className="container">
            <div className="row justify-content-center align-items-center">
                <div className="col-md-4">

                    <div className="card card-design">
                        <div className="card-body">
                            <h5 className="card-title text-center mb-4 font-weight-bold">Registration Form</h5>

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
                                <div className="mb-3">
                                    <input ref={passwordRef} type="password" className="form-control" placeholder="Password" autoComplete="off" required style={{ backgroundColor: 'transparent', border: 'none', outline: 'none', resize: 'none', boxShadow: 'none', borderBottom: '1px solid black', color: 'black' }} />
                                </div>
                                <button type="submit" className="btn btn-primary w-100">Register</button>
                            </form>

                            {isLoading ? <LoggingUser /> : <p className="text-center mt-3">Already have an account? <a href="/login">Login</a></p>}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
