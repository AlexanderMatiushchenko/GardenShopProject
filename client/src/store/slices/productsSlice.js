import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { backendURL } from "../../utils/var"
const initialState = {
    list:[],
}
export const  fetchAllProducts = createAsyncThunk(
    'products/allProducts',
    async()=>{
        const response = await fetch(`${backendURL}"/products/all"`)
        const data = await response.json()
        return data;
    }
)
export const productsSlice =  createSlice({
    name:"allProducts",
    initialState,
    reducer:{},
    extraReducers: (builder) => {
        builder
          .addCase(fetchAllProducts.pending, (state) => {
            state.status = 'loading';
          })
          .addCase(fetchAllProducts.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.list = action.payload;
          })
          .addCase(fetchAllProducts.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
          });
      },
})
export default productsSlice.reducer;