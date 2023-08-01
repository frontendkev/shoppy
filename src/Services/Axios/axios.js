import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: 'https://shoppy-service.onrender.com',
    //baseURL: 'http://localhost:4000',
    withCredentials: false,
    headers: {
        "Content-Type": "application/json"
    }


});