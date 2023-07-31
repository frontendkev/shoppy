import { createSlice } from "@reduxjs/toolkit";




export const ProductSlice = createSlice({
    name: 'product',
    initialState: {
        product: [],
        isLoading: false,
        similarProducts: []

    },
    reducers: {
        saveProduct: (state, { payload }) => {
            let item = payload.items.filter(item => item.title === payload.title)
            let sameItems = payload.items.filter(item => item.title !== payload.title)
            return {
                ...state, product: item, similarProducts: sameItems
            }
        }
    }
})

export const {saveProduct} = ProductSlice.actions

export default ProductSlice.reducer