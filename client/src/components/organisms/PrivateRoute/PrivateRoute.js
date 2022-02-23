import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { isAuthenticated } from "../../../utils/authUtils";

export default function PrivateRoute({ component: Component, ...rest }) {


    return !isAuthenticated ? <Navigate to="/login" /> : <Outlet />;
}