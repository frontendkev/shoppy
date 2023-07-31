
import { createSlice } from "@reduxjs/toolkit";
import { checkInStorage, saveInStorage } from "../ReduxHelpers/ReduxHelpers";
import { loginUser, registerUser } from "../ThunkServices/thunkConnections";


export const Auth_Token = "AUTH_TOKEN"
export const USER = "USER"

const AuthSlice = createSlice({
    name: 'auth',
    initialState: {
        user: [],
        isLoggedIn: false,
        isLoading: false,
        error: '',
    },
    reducers: {
        checkAuth: state => {
            const tokenInStorage = localStorage.getItem(Auth_Token)
            const userDetails = checkInStorage(USER)

            if (tokenInStorage && userDetails) {
                return {
                    ...state, isLoggedIn: true, user: userDetails
                }
            }
            return {
                ...state
            }

        },
        signOut: state => {
            localStorage.removeItem(Auth_Token)
            localStorage.removeItem(USER)
            console.log('removing')
            return {
                ...state, isLoggedIn: false, user: []
            }
        }


    },
    extraReducers: {
        [loginUser.pending]: state => {
            state.isLoading = true
        },
        [loginUser.fulfilled]: (state, { payload }) => {
            state.user = payload.user
            state.token = payload.accessToken
            payload.accessToken ? state.isLoggedIn = true : state.isLoggedIn = false
            payload.accessToken && localStorage.setItem(Auth_Token, payload.accessToken)
            payload.user && saveInStorage(USER, payload.user)
            state.isLoading = false
        },
        [loginUser.rejected]: (state, {payload}) => {
            state.isLoading = false
            state.error = payload
        },

        [registerUser.pending]: state => {
            state.isLoading = true
        },
        [registerUser.fulfilled]: (state, { payload }) => {
            console.log(payload)
        },
        [registerUser.rejected]: state => {
            state.isLoading = false
        }
    }
})

export const { checkAuth, signOut } = AuthSlice.actions
export default AuthSlice.reducer