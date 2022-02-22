import axios from 'axios';

const BASE_URL = 'http://localhost:4000';
export const signUp = async (email, password) => {
    axios.post(`${BASE_URL}/user/signup`, {
        email,
        password
    })
}
