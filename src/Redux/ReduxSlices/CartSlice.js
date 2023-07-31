import { createSlice } from "@reduxjs/toolkit";
import { checkInStorage, saveInStorage } from "../ReduxHelpers/ReduxHelpers";

export const CartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        count: 0,
        totalPrice: 0,
        isLoading: false,
        isError: false
    },
    reducers: {
        startFetch: (state) => {
            return {
                ...state, isLoading: true
            }
        },
        saveCart: (state, { payload }) => {
            let item = {
                "id": payload.item.id,
                "title": payload.item.title,
                "brand": payload.item.brand,
                "gender": payload.item.gender,
                "type": payload.item.type,
                "price": Number(payload.item.price),
                "totalPrice": Number(payload.item.price),
                "discount": payload.item.discount,
                "discountPrice": Number(payload.item.price - payload.item.price * payload.item.discount / 100),
                "image": payload.image,
                "color": payload.color,
                "quantity": 1,
                "size": 20
            }
            const cart = [...state.items, item]
            saveInStorage('cart', cart)
            return {
                ...state, items: cart, isLoading: false, count: cart.length
            }
        },
        fetchCart: (state) => {
            let cart = checkInStorage('cart')
            if (cart) return { ...state, isLoading: false, items: cart, count: cart.length }
            else if (!cart) return state
        },
        updateCart: (state, { payload }) => {
            let item = {
                "id": payload.item.id,
                "title": payload.item.title,
                "brand": payload.item.brand,
                "gender": payload.item.gender,
                "type": payload.item.type,
                "price": Number(payload.item.price),
                "totalPrice": Number(payload.item.price),
                "discount": payload.item.discount,
                "discountPrice": Math.ceil(payload.item.price - payload.item.price * payload.item.discount / 100),
                "image": payload.image,
                "color": payload.color,
                "quantity": 1,
                "size": 20
            }
            const cart = [...state.items, item]
            saveInStorage('cart', cart)
            return {
                ...state, isLoading: false, items: cart, count: cart.length
            }
        },
        deleteItem: (state, { payload }) => {
            const sameItems = state.items.filter(item => item.id === payload.id)
            const modifiedItems = sameItems.filter(item => item.color !== payload.color)
            const otherItems = state.items.filter(item => item.id !== payload.id)
            const items = [...otherItems, ...modifiedItems]
            const stringifyItems = JSON.stringify(items)
            localStorage.setItem('cart', stringifyItems)
            return {
                ...state, isLoading: false, items: items, count: items.length
            }
        },
        increaseQuantity : (state, {payload}) => {
            const cart = state.items.map((product) => product.id === payload.id && product.quantity < 10 ? { ...product, quantity: product.quantity + 1, totalPrice: product.totalPrice + product.price, discountPrice: product.discountPrice + Number(product.price - product.price * product.discount / 100)} : { ...product })
            return {
                ...state, items: cart
            }
        },
        reduceQuantity: (state, {payload}) => {
            const cart = state.items.map((product) => product.id === payload.id && product.quantity > 1 ? { ...product, quantity: product.quantity - 1, totalPrice: product.totalPrice - product.price, discountPrice: product.discountPrice - Number(product.price - product.price * product.discount / 100)} : { ...product })
            return {
                ...state, items: cart
            }
        }
    }
})

export const { startFetch, saveCart, fetchCart, updateCart, deleteItem, increaseQuantity, reduceQuantity } = CartSlice.actions
export default CartSlice.reducer