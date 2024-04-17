import React from 'react';
import '../../App.css';


export default function RegistrationForm() {
    return (
        <div className="container">
            <div className="row justify-content-center align-items-center" style={{ marginTop: "120px" }}>
                <div className="col-md-4">

                    <div className="card card-design">
                        <div className="card-body">
                            <h5 className="card-title text-center mb-4 font-weight-bold">Registration Form</h5>
                            
                            <form>
                                <div className="mb-3">
                                    <input id="form-input" type="text" className="form-control form-input" placeholder="Full Name" autoComplete="off" required style={{ backgroundColor: 'transparent', border: 'none', outline: 'none', resize: 'none', boxShadow: 'none', borderBottom: '1px solid black' }} />
                                </div>
                                <div className="mb-3">
                                    <input type="email" className="form-control" placeholder="Email" autoComplete="off" required style={{ backgroundColor: 'transparent', border: 'none', outline: 'none', resize: 'none', boxShadow: 'none', borderBottom: '1px solid black' }} />
                                </div>
                                <div className="mb-3">
                                    <input type="tel" className="form-control" placeholder="Contact Number" autoComplete="off" required style={{ backgroundColor: 'transparent', border: 'none', outline: 'none', resize: 'none', boxShadow: 'none', borderBottom: '1px solid black' }} />
                                </div>
                                <div className="mb-3">
                                    <input type="password" className="form-control" placeholder="Password" autoComplete="off" required style={{ backgroundColor: 'transparent', border: 'none', outline: 'none', resize: 'none', boxShadow: 'none', borderBottom: '1px solid black' }} />
                                </div>
                                <button type="submit" className="btn btn-primary w-100">Register</button>
                            </form>

                            <p className="text-center mt-3">Already have an account? <a href="/login">Login</a></p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
