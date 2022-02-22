import {
    SET_AUTH_USER,
    SET_AUTH_ERROR,
    SET_AUTH_LOADING,
    SET_AUTH_LOGOUT,
    SET_AUTH_LOGIN,
    SET_AUTH_REGISTER,

} from "./types"

import {
    loginWithEmailAndPassword,
    registerWithEmailAndPassword,
    logout,
    getCurrentUser,
    singInWithGoogle
}
    from "../../services/firebase/firebase"

import * as API from "../../api/userApi"

export const loginWithGoogle = (user) => {
    singInWithGoogle()
        .then(res => {
            console.log(res);
            return res;
        })

    return {
    }
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

export const NormalSignUp = (email, password) => {
    return async function signUpThunk(dispatch) {
        dispatch(API.signUp());
        try {
            // await auth.signInWithGoogle();
            console.log("signin in with Google");
            dispatch(signUpSuccess());
        } catch (error) {
            console.log(error);
            // dispatch(signUpError(error.message));
        }
    };
}

export const signUpSuccess = () => {
    return {
    }
}


export const registerWithGoogle = (user) => {
}

export const syncUserData = (user) => {
    return {
    }
}


