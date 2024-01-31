import { configureStore } from "@reduxjs/toolkit";
import HouseSlice from "../slices/HouseSlice"

const store = configureStore({
  reducer: {
    HouseSlice:HouseSlice
  },
});

export default store;
