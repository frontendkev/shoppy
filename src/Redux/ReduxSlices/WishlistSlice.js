

import { createSlice } from "@reduxjs/toolkit";
import { checkInStorage, fetchFromStorage, saveInStorage } from "../ReduxHelpers/ReduxHelpers";

const WishlistSlice = createSlice({
    name: "wishlist",
    initialState: {
        products: [],
        count: 0,
        isLoading: false,
        message: '',
        closeModal: false
    },
    reducers: {
        startFetch: state => {
            return {
                ...state, isLoading: true
            }
        },
        getWishlist: (state) => {
            const wishlist = checkInStorage('wishlist')

            if (wishlist){
                return {...state, products: wishlist, isLoading: false, count: wishlist.length}
            }
            return {
                ...state, isLoading: false
            }
        },
        saveWishlist: (state, { payload }) => {
            let item = {
                "id": payload.item.id,
                "title": payload.item.title,
                "brand": payload.item.brand,
                "gender": payload.item.gender,
                "type": payload.item.type,
                "price": Number(payload.item.price),
                "discount": payload.item.discount,
                "discountPrice": Number(payload.item.price - payload.item.price * payload.item.discount / 100),
                "image": payload.item.image.file ? payload.item.image.file : payload.item.image,
                "size": 20
            }
            const wishlist = [...state.products,item]
            saveInStorage('wishlist', wishlist)
            return {
                ...state, products: wishlist, count: wishlist.length, isLoading: false
            }
        },
        
        updateWishlistCount: (state) => {
            let fetchWish = checkInStorage("wishlist")
            if (fetchWish) return { ...state, products: fetchWish, count: fetchWish.length }
            else if (!fetchWish) return { ...state }
        },
        deleteFromWishlist: (state, { payload }) => {
            const findItems = checkInStorage('wishlist')
            const removeItem = findItems.filter(item => item.id !== payload.id)
            saveInStorage('wishlist', removeItem)
            return {
                ...state, products: removeItem, count: removeItem.length, closeModal: !state.closeModal
            }
        }

    }
})

export const { saveWishlist, getWishlist, updateWishlistCount, deleteFromWishlist } = WishlistSlice.actions

export default WishlistSlice.reducer