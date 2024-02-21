import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { backendURL } from "../../utils/var";

const initialState = {
  list: [],
};

export const fetchCategories = createAsyncThunk(
  'categories/fetchCategories',
  async () => {
    const response = await fetch(`${backendURL}"/categories/all"`);
    const data = await response.json();
    return data;
  }
);

export const categoriesSlice = createSlice({
  name: "allcategories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.list = action.payload;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default categoriesSlice.reducer;
