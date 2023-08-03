import { useContext } from "react"
import { DispatchContext, SWITCH_AUTH_METHOD, TOGGLE_MODAL, CLOSE_MODAL, SHOW_PAYMENT} from "./AppContext"



export default function ContextActions() {
    const dispatchContext = useContext(DispatchContext)



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


    return {
        toggleModal,
        closeModal,
        showPayments,
        toggleAuthMethod,
    }
}