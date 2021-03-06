import {
    SET_ITEM,
    SET_LOADING,
    SET_ERROR,
    SET_MEMES,
    SET_GIFS,
    UPLOAD_SUCCESS,
    UPLOAD_FAILURE
} from "./types";

import * as API from "../../api/itemApi"

export const uploadItem = (item) => {
    console.log(item);
    return async function createThunk(dispatch) {
        try {
            dispatch(API.uploadItem(item));
        } catch (error) {
            console.log(error, "uploadItemError");
        }
    }
}


export const setItem = (item) => {
    return {
        type: SET_ITEM,
        payload: item
    }
}

export const uploadSuccess = () => {
    return {
        type: UPLOAD_SUCCESS,
    }
}

export const uploadFailure = () => {
    return {
        type: UPLOAD_FAILURE,
    }
}

export const fetchAllMemes = (filter) => {
    return async (dispatch) => {
        try {
            const res = await API.getAllMemes(filter);
            return dispatch(setMemes(res.data));
        } catch (error) {
            console.log(error, "loadError");
        }
    }
}


export function fetchAllGifs(filters) {
    return async (dispatch) => {
        dispatch(setLoading());
        try {
            const res = await API.getAllGifs(filters);

            dispatch(setGifs(res.data));
        } catch (error) {
            dispatch(setError(error));
        }
    };
}

export const setMemes = (data) => {
    // console.log(data)
    return async (dispatch) => setMemesList(data);

}

export function setMemesList(data) {

    return {
        type: SET_MEMES,
        payload: data
    }
}
export const setGifs = (data) => {
    // console.log(data);
    return {
        type: SET_GIFS,
        payload: data
    }
}

export const setLoading = () => {
    return {
        type: SET_LOADING,
        // payload: isLoading
    }
}

export const setError = () => {
    return {
        type: SET_ERROR,
        // payload: error
    }
}


