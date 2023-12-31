import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice"; 
import categoriesSlice from "./slices/categoriesSlice";
import productsSlice from "./slices/productsSlice";

export const store = configureStore({
  reducer: {
    categories: categoriesSlice,
    products: productsSlice,
    cart: cartReducer,
  },
});
