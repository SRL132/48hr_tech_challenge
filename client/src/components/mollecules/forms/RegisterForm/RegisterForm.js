import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";

import {
    loginWithGoogle,
    normalLogin,
    setCurrentUser,
    // signUpWithEmailRequest, 
    signUpWithGoogleRequest,
    userLogout
} from "../../../../redux/user/actions";

import { isAuthenticated } from "../../../../utils/authUtils";

import * as ROUTES from "../../../../routes";
// import { useAuth } from "context/auth/reducer";
// import { syncUserData } from "services/utils";

export default function Register() {
    const dispatch = useDispatch();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    // const { register, currentUser } = useAuth();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    let navigate = useNavigate();

    // async function handleSubmit(e) {
    //     e.preventDefault();
    //     if (password === passwordConfirm) {
    //         console.log(email, password)
    //         try {
    //             setLoading(true);
    //             await dispatch(signUpWithEmailRequest(email, password));
    //             // await syncUserData();
    //             navigate("/home");
    //         } catch {
    //             setError("Something went wrong");
    //         }
    //     } else {
    //         return setError("Passwords do not match");
    //     }
    //     setLoading(false);
    // }

    function handleSignInWithGoogle(e) {
        e.preventDefault();
        dispatch(signUpWithGoogleRequest());
    }

    useEffect(() => {
        if (isAuthenticated) {
            navigate(ROUTES.HOME);
        }
    }, [isAuthenticated]);

    return (
        <div className="container p-5">
            <h2 className="text-center">Register</h2>
            {/* {currentUser && (
                <div variant="success">{currentUser.email} is logged in</div>
            )} */}
            {error && <p className="text-center danger">{error}</p>}
            <div className="row">
                <div className="col-md-6 mx-auto">
                    {/* <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="inputEmail">Email</label>
                            <input
                                type="email"
                                className="form-control"
                                id="inputEmail"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                autoFocus
                            />
                            <label htmlFor="inputPassword">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                id="inputPassword"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                autoFocus
                            />
                            <label htmlFor="inputPasswordConfirm">Confirm Password</label>
                            <input
                                type="password"
                                className="form-control"
                                id="inputConfirmPassword"
                                placeholder="Password"
                                value={passwordConfirm}
                                onChange={(e) => setPasswordConfirm(e.target.value)}
                                autoFocus
                            />
                        </div>

                        <button
                            disabled={loading}
                            type="submit"
                            className="btn btn-primary"
                        >
                            Register
                        </button>
                    </form> */}
                    <br />
                    <button
                        disabled={loading}
                        type="submit"
                        className="btn btn-primary"
                        onClick={handleSignInWithGoogle}
                    >
                        Register with Google
                    </button>

                    <p className="text-center">
                        Already have an account? Login <Link to="/login">here</Link>
                    </p>
                </div>
            </div>
        </div>
    );
}