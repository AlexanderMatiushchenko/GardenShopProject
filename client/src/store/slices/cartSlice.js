import { createSlice } from "@reduxjs/toolkit";

const read = () => {
  return JSON.parse(localStorage.getItem("cart")) || [];
};

const write = (data) => {
  localStorage.setItem("cart", JSON.stringify(data));
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: { list: read() },
  reducers: {
    addAction: (state, { payload }) => {
      const target = state.list.find(({ id }) => id === payload.id);
      if (!target) {
        state.list.push({ ...payload, count: 1 });
      } else {
        target.count++;
      }
      write(state.list);
    },
    increment: (state, { payload }) => {
      state.list.find(({ id }) => id === payload).count++;
      write(state.list);
    },
    decrement: (state, { payload }) => {
      const target = state.list.find(({ id }) => id === payload);
      target.count--;
      state.list = target.count === 0 ? state.list.filter(({ id }) => id !== payload) : state.list;
      write(state.list);
    },
    removeItem: (state, { payload }) => {
      state.list = state.list.filter(({ id }) => id !== payload);
      write(state.list);
    },
    
  },
});

export const { addAction, increment, decrement, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
