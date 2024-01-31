import { createSlice } from "@reduxjs/toolkit";
import { housesData } from "../../data"

const initialState = {
  houses: housesData,
  country: "Location (any)",
  countries: [],
  property: "Property type (any)",
  properties: [],
  price: "Price range (any)",
  loading: false,
};

const HouseSlice = createSlice({
  name: "HouseSlice",
  initialState: initialState,
  reducers: {
    setHouses(state, action) {
      state.houses = action.payload;
    },
    setCountry(state, action) {
      state.country = action.payload;
    },
    setCountries(state, action) {
      state.countries = action.payload;
    },
    setProperty(state, action) {
      state.property = action.payload;
    },
    setProperties(state, action) {
      state.properties = action.payload;
    },
    setPrice(state, action) {
      state.price = action.payload;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
  },
});

export const {
  setHouses,
  setCountry,
  setCountries,
  setProperty,
  setProperties,
  setPrice,
  setLoading,
} = HouseSlice.actions;
export default HouseSlice.reducer;
