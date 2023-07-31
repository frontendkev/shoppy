import { useContext } from "react"
import { DispatchContext, ShoppyContext, SWITCH_AUTH_METHOD, TOGGLE_MODAL, TOGGLE_SIDE_NAV, CLOSE_MODAL, SHOW_PAYMENT, SET_CRUMBS } from "./AppContext"



export default function ContextActions() {
    const dispatchContext = useContext(DispatchContext)
    const context = useContext(ShoppyContext)

    function closeSideNav () {
        return dispatchContext({
            type: TOGGLE_SIDE_NAV,
            payload: false
        })
    }

    function toggleSideNav () {
        return dispatchContext({
            type: TOGGLE_SIDE_NAV,
            payload: !context.toggleSideNav
        })
    }

    function closeModal() {
        return dispatchContext({
            type: CLOSE_MODAL,
            payload: {
                show: false
            }
        })
    }
    
    function toggleModal(bool, text, id) {
        return dispatchContext({
            type: TOGGLE_MODAL,
            payload: {
                show: bool,
                text: text,
                id : id
            }
        })
    }

    function showPayments(bool, text, page) {
        return dispatchContext({
            type: SHOW_PAYMENT,
            payload: {
                show: bool,
                text: text,
                page: page
            }
        })
    }

    function toggleAuthMethod(value) {
        return dispatchContext({
            type: SWITCH_AUTH_METHOD,
            payload: value
        })
    }

    function saveCrumb(crumbs) {
        return dispatchContext({
            type: SET_CRUMBS, 
            payload:crumbs
        })
    }
    return {
        closeSideNav,
        toggleSideNav,
        toggleModal,
        closeModal,
        showPayments,
        toggleAuthMethod,
        saveCrumb
    }
}