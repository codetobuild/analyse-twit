import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./reducer/app.reducer";
import preferenceReducer from "./reducer/preference.reducer";
import twitterSplice from "./reducer/twitter.reducer";

export default configureStore({
  reducer: {
    app: appSlice,
    preferences: preferenceReducer,
    twitter: twitterSplice,
  },
});
