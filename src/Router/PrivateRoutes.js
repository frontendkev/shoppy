
import { Navigate, Outlet } from "react-router-dom"



export default function PrivateRoutes({ auth }) {
    if (!auth.isLoggedIn) {
        return <Navigate to="/shoppy/verification/login" replace />
    }
   

    return <Outlet />
}