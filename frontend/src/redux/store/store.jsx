import { configureStore } from "@reduxjs/toolkit";
import HouseSlice from "../slices/HouseSlice"
import AuthSlice from "../slices/AuthSlice";

const store = configureStore({
  reducer: {
    HouseSlice:HouseSlice,
    AuthSlice: AuthSlice,
  },
});

export default store;
