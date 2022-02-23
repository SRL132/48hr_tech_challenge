import {
    SET_LOADING,
    SET_ERROR,
    SET_ITEM,
    SET_GIFS,
    SET_MEMES,
    UPLOAD_SUCCESS,
    UPLOAD_FAILURE,
    FILTER_ITEMS
} from "./types";

import initialState from "../user/state";

const itemReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_MEMES:


            return {
                ...state,
                memesList: action.payload
            }
        case SET_GIFS:

            return {
                ...state,
                gifsList: action.payload
            }
        case SET_ITEM:
            return {
                ...state,
            }
        case SET_LOADING:
            return {
                ...state,
            }
        case SET_ERROR:
            return {
                ...state,
            }
        case UPLOAD_SUCCESS:
            return {
                ...state,
            }
        case UPLOAD_FAILURE:
            return {
                ...state,
            }
        case FILTER_ITEMS:
            return {
                ...state,
            }
        default:
            return state
    }
}

export default itemReducer;
