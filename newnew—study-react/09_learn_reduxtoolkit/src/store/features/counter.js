import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    counter: 99,
  },
  reducers: {
    addNumber(state, action) {},
    subNumber(state, action) {},
  },
});

export const { addNumber, subNumber } = counterSlice.actions;

export const counterReducer = counterSlice.reducer;
