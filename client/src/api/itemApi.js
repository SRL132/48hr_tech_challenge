import { setMemes, setGifs } from "../redux/items/actions";

const axios = require("axios");

const BASE_URL = 'http://localhost:4000';

const token = localStorage.getItem('token');


export const uploadItem = async (item) => {
    axios.post(`${BASE_URL}/${item.type}/`, {
        item
    },
        {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        .then(res => {
            console.log(res);
        }
        )
        .catch(err => {
            console.log(err);
        });
}

export async function getAllMemes(filters) {
    console.log(filters.categories)
    const res = await axios.get(`${BASE_URL}/meme/`, {
        params: filters
    });
    return res.data;
}

export const getAllGifs = async (filters) => {
    const res = await axios.get(`${BASE_URL}/gif/`, {
        params: filters
    });
    return res.data;

}
