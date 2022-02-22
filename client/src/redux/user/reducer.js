import initialState from "./state"

import {
    SET_AUTH_USER,
    SET_AUTH_ERROR,
    SET_AUTH_LOADING,
    SET_AUTH_LOGOUT,
    SET_AUTH_LOGIN,
    SET_AUTH_REGISTER,

} from "./types"

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_USER:
            return {
                ...state,
            }
        case SET_AUTH_ERROR:
            return {
                ...state,
            }
        case SET_AUTH_LOADING:
            return {
                ...state,
            }
        case SET_AUTH_LOGOUT:
            return {
                ...state,
            }
        case SET_AUTH_LOGIN:
            return {
                ...state,
            }
        case SET_AUTH_REGISTER:
            return {
                ...state,
            }
        default:
            return state

    }
}

export default userReducer