import {createHashRouter, createRoutesFromElements, Link, Route} from "react-router-dom"
import Root from "./Root"
import ProductsListings from "./ProductsListings"
import ProductsPage from "../Pages/ProductsPage/ProductsPage"
import ProductPage from "../Pages/ProductPage/ProductPage"
import DashBoard from "../Pages/DashBoard/DashBoard"
import ShoppingCart from "../Pages/ShoppingCart/ShoppingCart"
import Wishlist from "../Pages/Wishlist/Wishlist"
import AuthPage from "../Pages/AuthPage/AuthPage"
import Login from "../Components/Login/Login"
import RegisterUser from "../Components/RegisterUser/RegisterUser"
import UploadPage from "../Services/uploadPage"
import UploadService from "../Services/uploadService"
import ErrorPage from "../Pages/ErrorPage/ErrorPage"
import PrivateRoutes from "./PrivateRoutes"
import {useSelector} from "react-redux"
import Connections from "../Services/Connections/Connections"
import {axiosInstance} from "../Services/Axios/axios"
import Shoppy from "./Shoppy"
import GenderPage from "../Pages/GenderPage/GenderPage"


export default function Routes() {
    const auth = useSelector(store => store.auth)
    const {getRequest} = Connections()

    const routes = createHashRouter(
        createRoutesFromElements(
            <Route path="/" element={<Root />}>
                <Route
                    index
                    element={
                        <GenderPage />
                    }
                />
                <Route
                    path="shoppy"
                    element={<Shoppy/>}
                    handle={{
                        crumb: () => <Link to={`/shoppy`}>shoppy</Link>
                    }}
                >

                    <Route path="verification" element={<AuthPage />}>
                        <Route path="login" element={<Login />} />
                        <Route path="register" element={<RegisterUser />} />
                    </Route>
                    <Route element={<PrivateRoutes auth={auth} />}>
                        <Route path="dashboard" element={<DashBoard />} />
                    </Route>

                    <Route
                        path=":type"
                        element={<ProductsListings/>}
                        loader={({params}) => {
                            return {
                                type: params.type
                            }
                        }}
                        handle={{
                            crumb: (data) => <Link to={`/shoppy/${data.type}`}>{data.type}</Link>
                        }}
                    >
                        <Route
                            index
                            element={<ProductsPage/>}
                            loader={({params}) => {
                                return getRequest(`/products?gender=female&type_like=${params.type}`)
                            }}/>


                        <Route
                            path=":title"
                            element={<ProductPage/>}
                            loader={({params}) => {
                                return getRequest(`/products?gender=female&type_like=${params.type}`)
                            }}
                            handle={{
                                crumb: (data) => <Link to={'#'}>{data[0].title.slice(0, 20) + '...'}</Link>
                            }}
                        />


                    </Route>

                    <Route
                        path="winter"
                        element={<ProductsPage/>}
                        loader={() => {
                            return getRequest(`/products?gender=female&type_like=sweatshirt&type_like=hoodie`)
                        }}
                        handle={{
                            crumb: () => <Link to={'#'} path={`/shoppy/winter`}>winter</Link>
                        }}
                    />

                    <Route
                        path="collections"
                        element={<ProductsPage/>}
                        loader={({params}) => {
                            return getRequest(`/products?gender=female`)
                        }}
                        handle={{
                            crumb: () => <Link path={`/shoppy/collections`}>collections</Link>
                        }}
                    />


                    <Route
                        path="search/:searchParam"
                        element={<ProductsPage/>}
                        loader={({params}) => {
                            return getRequest(`/products?q=${params.searchParam}`)
                        }}
                        handle={{
                            crumb: () => <Link>search</Link>
                        }}
                    />

                    <Route
                        path="wishlist"
                        element={<Wishlist/>}
                    />

                    <Route
                        path="cart"
                        element={<ShoppingCart/>}
                    />


                    <Route
                        path="uploadpage"
                        element={<UploadService/>}
                    />

                    <Route
                        path="server"
                        element={<UploadPage/>}
                        errorElement={<ErrorPage/>}
                        loader={async () => {
                            let fetch = await axiosInstance.get('products')
                            return fetch.data
                        }}
                    />

                </Route>
                <Route path="*" element={<main><h2>this route does not exist</h2></main>}/>

            </Route>
        )
    )

    return {
        routes
    }
}
