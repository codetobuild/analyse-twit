import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 1,
  },
  reducers: {
    increaseCounter: (state, action) => {
      state.count = state.count + 1;
      // console.log(action);
    },
    decreaseCounter: (state, action) => {
      state.count = state.count - 1;
    },
  },
});

export const { increaseCounter, decreaseCounter } = counterSlice.actions; // for dispatch
export default counterSlice.reducer; // for store
