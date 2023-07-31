import {configureStore} from "@reduxjs/toolkit";
import productsSlice from "../ReduxSlices/ProductsSlice";
import CartSlice from "../ReduxSlices/CartSlice";
import ProductSlice from "../ReduxSlices/ProductSlice";
import AuthSlice from "../ReduxSlices/AuthSlice";
import WishlistSlice from "../ReduxSlices/WishlistSlice";

export const store = configureStore({
    reducer : {
        products: productsSlice,
        cart: CartSlice,
        product: ProductSlice,
        auth: AuthSlice,
        wishlist: WishlistSlice
    }
});