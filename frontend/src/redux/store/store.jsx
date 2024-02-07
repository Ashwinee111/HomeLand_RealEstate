import { configureStore } from "@reduxjs/toolkit";
import HouseSlice from "../slices/HouseSlice"
import AuthSlice from "../slices/AuthSlice";
import ProfileSlice from "../slices/ProfileSlice";

const store = configureStore({
  reducer: {
    HouseSlice:HouseSlice,
    AuthSlice: AuthSlice,
    ProfileSlice: ProfileSlice
  },
});

export default store;
