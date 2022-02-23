import {
    SET_AUTH_USER,
    SET_AUTH_ERROR,
    SET_AUTH_LOADING,
    SET_AUTH_LOGOUT,
    SET_AUTH_LOGIN,
    SET_AUTH_REGISTER,
    SIGN_UP_SUCCESS,
    SIGN_UP_REQUEST


} from "./types"

import {
    loginWithEmailAndPassword,
    registerWithEmailAndPassword,
    logout,
    getCurrentUser,
    signInWithGoogle,
    // signUpWithEmailAndPassword,
    sendPasswordResetEmail,
    signOut,
    getCurrentUserToken,
    getCurrentUserEmail,

}
    from "../../services/firebase/firebase"

import * as API from "../../api/userApi"

export const loginWithGoogle = () => {
    signInWithGoogle()
        .then(res => {
            console.log(res);
            localStorage.setItem("token", res.credential.accessToken);
            localStorage.setItem("user", JSON.stringify(res.user));
            return res;
        })

}

export const setCurrentUser = (user) => {
    return {
        type: SET_AUTH_USER,
        payload: user
    }
}

export const normalLogin = () => {
    return {}
}


export const userLogout = (user) => {
    return {
    }
}

export function signUpWithGoogleRequest() {
    return async function signUpThunk(dispatch) {
        dispatch(signUpRequest());
        try {
            await loginWithGoogle();
            console.log("signin in with Google");
            dispatch(signUpSuccess());
        } catch (error) {
            console.log(error);
            dispatch(signUpError(error.message));
        }
    };
}


export const signUpRequest = (user) => ({
    type: SIGN_UP_REQUEST,
    payload: user,
});


export const signUpSuccess = (user) => ({
    type: SIGN_UP_SUCCESS,
    payload: user,
});

export const signOutRequest = () => ({
    type: SET_AUTH_LOGOUT,
});

export const signUpError = (message) => ({
    type: SET_AUTH_ERROR,
    payload: message,
});

export const signOutError = (message) => ({
    type: SET_AUTH_ERROR,
    payload: message,
});