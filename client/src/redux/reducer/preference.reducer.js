import { createSlice } from "@reduxjs/toolkit";
const ACTIVE_SIDE_NAVBAR = "ACTIVE_SIDE_NAVBAR";

const savetoLocalStorage = (value) => {
  localStorage.setItem(ACTIVE_SIDE_NAVBAR, value);
};

const INITIAL_STATE = {
  darkMode: false,
  activeSideNavbar: localStorage.getItem(ACTIVE_SIDE_NAVBAR) || "DASHBOARD",
};

const preferenceSlice = createSlice({
  name: "preferenceSlice",
  initialState: INITIAL_STATE,
  reducers: {
    TOGGLE_THEME: (state, action) => {
      state.darkMode = !state.darkMode;
    },
    CHANGE_ACTIVE_SIDE_NAVBAR: (state, action) => {
      savetoLocalStorage(action.payload);
      state.activeSideNavbar = action.payload;
    },
  },
});

export const { TOGGLE_THEME, CHANGE_ACTIVE_SIDE_NAVBAR } =
  preferenceSlice.actions; // for dispatch
export default preferenceSlice.reducer; // for store
