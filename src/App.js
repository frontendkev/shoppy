import { useEffect } from "react";
import { useDispatch } from "react-redux";
import './App.css';
import { RouterProvider } from "react-router-dom";
import { fetchCart } from "./Redux/ReduxSlices/CartSlice";
import { checkAuth } from "./Redux/ReduxSlices/AuthSlice";
import { getWishlist } from "./Redux/ReduxSlices/WishlistSlice";
import Routes from "./Router/Routes";



function App() {
    const dispatch = useDispatch()
    const {routes} = Routes()



    useEffect(() => {
        dispatch(checkAuth())
        dispatch(fetchCart())
        dispatch(getWishlist())
    }, [])




    return (
        <div className="App bg-white">
            <RouterProvider router={routes} />
        </div>
    );
}



export default App;