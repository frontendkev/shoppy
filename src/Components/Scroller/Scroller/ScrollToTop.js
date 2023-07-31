import { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { DispatchContext, SHOW_NAV } from "../../../AppContext/AppContext";


export default function ScrollToTop() {

    const location = useLocation()
    const contextDispatch = useContext(DispatchContext)

    useEffect(() => {
        window.scrollTo(0, 0)
        contextDispatch({type: SHOW_NAV, payload: true})
    }, [location.pathname])

    return null;
}