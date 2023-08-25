import {createSlice} from "@reduxjs/toolkit";
import {saveInStorage} from "../ReduxHelpers/ReduxHelpers";
import {fetchRequest, searchProducts} from "../ThunkServices/thunkConnections";


export const productsSlice = createSlice({
    name: 'products',
    initialState: {
        products: [],
        count: 0,
        lastViewed: [],
        isLoading: false,
    },
    reducers: {

        startFetch: (state) => {
            return {
                ...state, isLoading: true
            }
        },
        filterProducts: (state, { payload }) => {
            return {
                ...state, products: payload.items, isLoading: false, count: payload.items.length
            }
        },
        fetchProducts: (state, { payload }) => {
            return { ...state, products: [...payload.items], count: payload.items.length, isLoading: false }
        },

        fetchLastViewed: (state) => {
            const response = localStorage.getItem('lastViewed')
            if (response) {
                const parsedItem = JSON.parse(response)
                const fetchedItems = parsedItem.sort((a, b) => {
                    let dateA = a.time
                    let dateB = b.time
                    if (dateA > dateB) return -1
                    else if (dateA < dateB) return 1
                    return 1
                })
                return {
                    ...state, lastViewed: fetchedItems
                }
            }
            return state
        },

        saveLastSeen: (state, {payload}) => {
            const items = [...state.lastViewed, payload.item]
            saveInStorage('lastViewed', items)
            return {
                ...state, lastViewed: items
            }
        },

        //adding new item to last viewed array
        updateLastViewed: (state, { payload }) => {
            saveInStorage('lastViewed', payload.items)
            return {
                ...state, lastViewed : payload.items
            }
        },

        clearLastViewed: (state) => {
            localStorage.removeItem('lastViewed')
            return {
                ...state, lastViewed: []
            }
        }
    },
    extraReducers: {
        [searchProducts.pending]: (state) => {
            state.isLoading = true
        },
        [searchProducts.fulfilled]: (state, {payload}) => {
            state.isLoading = false
            state.products = payload
            state.count = payload.length
        },
        [searchProducts.rejected]: (state) => {
            state.isLoading = false
        },
        [fetchRequest.pending]: state => {
            state.isLoading = true
        },
        [fetchRequest.fulfilled]: (state, { payload }) => {
            state.products = payload
            state.count = payload.length
            state.isLoading = false
        },
        [fetchRequest.rejected]: state => {
            state.isLoading = false
        }
    }
})

export const { startFetch, fetchProducts, clearLastViewed, fetchLastViewed, saveLastSeen, updateLastViewed, filterProducts } = productsSlice.actions

export default productsSlice.reducer
