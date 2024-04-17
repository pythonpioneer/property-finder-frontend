import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import '../../App.css';
import LoggingUser from '../loader/LoggingUser';


export default function LoginForm() {

    // to store the form data
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    // hooks to call actions and navigate
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { isLoading } = useSelector(state => state.user);

    // to handle the form
    const handleFormSubmit = (e) => {
        e.preventDefault();

        const formData = {
            email: emailRef.current.value,
            password: passwordRef.current.value,
        };

    }

    return (
        <div className="container">
            <div className="row justify-content-center align-items-center">
                <div className="col-md-4">

                    <div className="card card-design login-card" style={{ marginTop: '160px' }}>
                        <div className="card-body">
                            <h5 className="card-title text-center mb-4 font-weight-bold" >Login Form</h5>

                            <form onSubmit={handleFormSubmit}>
                                <div className="mb-3">
                                    <input ref={emailRef} type="email" className="form-control" placeholder="Email" autoComplete="off" required style={{ backgroundColor: 'transparent', border: 'none', outline: 'none', resize: 'none', boxShadow: 'none', borderBottom: '1px solid black', color: 'black' }} />
                                </div>
                                <div className="mb-3">
                                    <input ref={passwordRef} type="password" className="form-control" placeholder="Password" autoComplete="off" required style={{ backgroundColor: 'transparent', border: 'none', outline: 'none', resize: 'none', boxShadow: 'none', borderBottom: '1px solid black', color: 'black' }} />
                                </div>
                                <button type="submit" className="btn btn-primary w-100">Login</button>
                            </form>

                            {isLoading ? <LoggingUser /> : <p className="text-center mt-3">Don't have an account? <Link to="/register">Register</Link></p>}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
