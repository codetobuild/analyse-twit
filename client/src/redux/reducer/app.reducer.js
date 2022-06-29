import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  user: null,
  isAuthenticated: false,
};

const appSlice = createSlice({
  name: "appSlice",
  initialState: INITIAL_STATE,
  reducers: {
    ADD_USER: (state, action) => {
      state.user = { ...state.user, ...action.payload.user }; // object
      state.isAuthenticated = action.payload.user ? true : false; // boolean
    },
    REMOVE_USER: (state, action) => {
      state.user = null;
      state.isAuthenticated = false;
    },
    CLEAR_ALL_LOCALSTORAGE: (state, action) => {
      localStorage.clear();
    }
  },
});

export const { ADD_USER, REMOVE_USER, CLEAR_ALL_LOCALSTORAGE } = appSlice.actions; // for dispatch
export default appSlice.reducer; // for store
