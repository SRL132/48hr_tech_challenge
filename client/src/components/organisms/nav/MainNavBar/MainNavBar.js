import React from "react";
import { Link } from "react-router-dom";


import { isAuthenticated } from "../../../../utils/authUtils";

import SearchInput from "../../../atoms/SearchInput/SearchInput";

import { userLogout } from "../../../../redux/user/actions";

import * as ROUTES from "../../../../routes";

export default function MainNavBar() {

    async function handleLogout() {
        try {
            await userLogout();
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <Link to="/" replace className="navbar-brand">
                    The Memeverse
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            {!isAuthenticated ? (
                                <Link className="nav-link" to={ROUTES.LOGIN}>
                                    Log In
                                </Link>
                            ) : (
                                <Link className="nav-link" to={ROUTES.HOME} onClick={handleLogout}>
                                    Log Out
                                </Link>
                            )}
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link" to={ROUTES.UPLOAD}>
                                Upload
                            </Link>
                        </li>
                        <li className="nav-item active">
                            <SearchInput />
                        </li>
                        <li className="nav-link">Best Memes and Gifs you can find!</li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}