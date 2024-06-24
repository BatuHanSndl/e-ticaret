import { configureStore } from '@reduxjs/toolkit'
import productsReducer from '../redux/slices/productsSlice'
import basketReducer from '../redux/slices/basketSlice'

export const store = configureStore({
    reducer: {
        product: productsReducer,
        basket: basketReducer
    },
})