import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: 'https://shoppy-service.onrender.com',
    withCredentials: false,
    headers: {
        "Content-Type": "application/json"
    }


});