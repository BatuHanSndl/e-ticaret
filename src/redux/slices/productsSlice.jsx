import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    products: [],
}

const baseURL = "https://fakestoreapi.com";

export const getAllProducts = createAsyncThunk("getAllProducts", async () => {
    const response = await axios.get(`${baseURL}/products`);
    return response.data;
})


export const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {

        builder.addCase(getAllProducts.fulfilled, (state, action) => {
            state.products = action.payload;
        })
    }
});


export const { } = productsSlice.actions

export default productsSlice.reducer