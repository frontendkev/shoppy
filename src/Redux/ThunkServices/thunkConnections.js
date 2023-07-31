import { createAsyncThunk } from "@reduxjs/toolkit"
import { axiosInstance } from "../../Services/Axios/axios"

//redux thunk modules

export const registerUser = createAsyncThunk('auth/registerUser', async ({username, email, password}) => {
    try {
        const fd = new FormData()
        fd.append('username', username)
        fd.append('email', email)
        fd.append('password', password)
        const registered = await axiosInstance.post('register', fd)
        return registered
    } catch (e) { return e.message }
})

export const loginUser = createAsyncThunk('auth/loginUser', async (payload) => {
    try {

        const fd = new FormData()

        fd.append('email', payload.email)
        fd.append('password', payload.password)
        const sendData = await axiosInstance.post('login', fd)
        return sendData.data

    } catch (e) {
        return e.message
    }
})


export const searchProducts = createAsyncThunk("products/searchProducts", async ({searchParam, gender}) => {
    try {
        const fetch = await axiosInstance.get(`api/products?q=${searchParam}&gender=${gender}`)
        return fetch.data
    } catch (error) {
        return error.message
    }
})

export const fetchRequest = createAsyncThunk("products/sortProducts", async ({ url }) => {
    try {
        const fetch = await axiosInstance.get(url)
        return fetch.data
    } catch (e) {
        return e.message
    }
})