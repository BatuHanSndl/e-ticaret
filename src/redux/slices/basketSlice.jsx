import { createSlice } from '@reduxjs/toolkit';

const getBasketFromStorage = () => {
    const basket = localStorage.getItem("basket");
    return basket ? JSON.parse(basket) : [];
}

const initialState = {
    products: getBasketFromStorage(),
}

const writeToBasketStorage = (basket) => {
    localStorage.setItem("basket", JSON.stringify(basket));
}

export const basketSlice = createSlice({
    name: "basket",
    initialState,
    reducers: {
        addToBasket: (state, action) => {
            const productIndex = state.products.findIndex(item => item.id === action.payload.id);
            if (productIndex >= 0) {
                state.products[productIndex].count += action.payload.count;
            } else {
                state.products.push(action.payload);
            }
            writeToBasketStorage(state.products);
        }
    }
});

export const { addToBasket } = basketSlice.actions;

export default basketSlice.reducer;
