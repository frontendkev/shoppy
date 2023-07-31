import { createContext, useReducer } from "react";

export const ShoppyContext = createContext()
export const DispatchContext = createContext()

export const MALE = "male"
export const FEMALE = "female"
export const TOGGLE_SIDE_NAV = "TOGGLE_SIDE_NAV"
export const SET_GENDER = "SET_GENDER"
export const TOGGLE_MODAL = "TOGGLE_MODAL"
export const SWITCH_AUTH_METHOD = "SWITCH_AUTH_METHOD"
export const CLOSE_MODAL = "CLOSE_MODAL"
export const SHOW_PAYMENT = "SHOW_PAYMENT"
export const SHOW_NAV = "SHOW_NAV"
export const ADD_NOTICE = "ADD_NOTICE"
export const SET_NOTICE = "SET_NOTICE"
export const SET_CRUMBS = 'SET_CRUMBS'


export const initialState = {
    toggleSideNav: false,
    currentGender: "",
    toggleModal: false,
    modalText: "",
    removeId: 0,
    authMethod: "login",
    modalPage: "",
    showNav: true,
    notice: '',
    crumbs: ''
}

export const ContextReducer = (state, { type, payload }) => {
    switch (type) {
        case TOGGLE_SIDE_NAV: {
            return {
                ...state, toggleSideNav: payload
            }
        }
        case SET_GENDER: {
            return {
                ...state, currentGender: payload
            }
        }
        case TOGGLE_MODAL: {
            return {
                ...state, toggleModal: payload.show, modalText: payload.text, removeId: payload.id, modalPage: "wishlist"
            }
        }
        case CLOSE_MODAL: {
            return {
                ...state, toggleModal: payload.show
            }
        }
        case SHOW_PAYMENT: {
            return {
                ...state, toggleModal: payload.show, modalText: payload.text, modalPage: payload.page
            }
        }
        case SWITCH_AUTH_METHOD: {
            return {
                ...state, authMethod: payload
            }
        }
        case SHOW_NAV: {
            return {
                ...state, showNav: payload
            }
        }
        default: {
            return state;
        }
    }
}

const AppContext = ({ children }) => {
    const [state, dispatch] = useReducer(ContextReducer, initialState);

    return (
        <ShoppyContext.Provider value={{ ...state }} >
            <DispatchContext.Provider value={dispatch}>
                {children}
            </DispatchContext.Provider>
        </ShoppyContext.Provider>
    )
}

export default AppContext;