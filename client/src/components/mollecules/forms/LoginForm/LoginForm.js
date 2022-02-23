import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";


import {
    loginWithGoogle,
    // normalLogin,
    // setCurrentUser,
    // signUpWithEmailRequest
}
    from '../../../../redux/user/actions';

import { isAuthenticated } from "../../../../utils/authUtils";

import * as ROUTES from "../../../../routes";



export default function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");


    let navigate = useNavigate();

    async function handleLoginWithGoogleClick(e) {
        e.preventDefault();

        try {
            await loginWithGoogle();
            console.log("before sync");
            // const res = await syncUserData();

            console.log("after sync");
            // setCurrentUser(res.data.userId);

            // navigate(ROUTES.HOME, { replace: true });
        } catch {
            setError("User not found");
        }
    }
    // async function handleSubmit(e) {
    //     e.preventDefault();

    //     try {
    //         await signUpWithEmailRequest(email, password);
    //         console.log("before sync");
    //         // const res = await syncUserData();

    //         // console.log("after sync");
    //         // setCurrentUser(res.data.userId);

    //         navigate(ROUTES.UPLOAD, { replace: true });
    //     } catch (err) {
    //         setError("Something went wrong");
    //         console.log(err);
    //     }
    // }

    useEffect(() => {
        if (isAuthenticated) {
            navigate(ROUTES.UPLOAD, { replace: true });
        }
    }, [isAuthenticated]);

    return (
        <div className="container p-5">
            <h2 className="text-center">Log In</h2>
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
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="inputPassword">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                id="inputPassword"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                autoFocus
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">
                            Log in
                        </button>
                    </form> */}

                    <br />
                    <button

                        type="submit"
                        className="btn btn-primary"
                        onClick={handleLoginWithGoogleClick}
                    >
                        Login with Google
                    </button>
                    <p className="text-center">
                        Don't have an account yet? Register <a href={ROUTES.REGISTER}>here</a>
                    </p>
                </div>
            </div>
        </div>
    );
}