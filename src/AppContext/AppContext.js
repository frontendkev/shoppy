import {createContext, useReducer} from "react";

export const ShoppyContext = createContext()
export const DispatchContext = createContext()

export const MALE = "male"
export const FEMALE = "female"
export const SET_GENDER = "SET_GENDER"
export const TOGGLE_MODAL = "TOGGLE_MODAL"
export const SWITCH_AUTH_METHOD = "SWITCH_AUTH_METHOD"
export const CLOSE_MODAL = "CLOSE_MODAL"
export const SHOW_PAYMENT = "SHOW_PAYMENT"
export const ADD_NOTICE = "ADD_NOTICE"
export const SET_NOTICE = "SET_NOTICE"



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
        case SWITCH_AUTH_METHOD: {
            return {
                ...state, authMethod: payload
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
