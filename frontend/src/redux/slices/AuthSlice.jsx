import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  signupData: null,
  loading: false,
  token: localStorage.getItem("token") ? JSON.parse(localStorage.getItem("token")) : null,
};

const AuthSlice = createSlice({
  name: "AuthSlice",
  initialState: initialState,
  reducers: {
    setSignupData: (state, action) => {
        state.signupData = action.payload;
    },
    setLoading: (state, action) => {
        state.loading = action.payload
    },
    setToken: (state, action) => {
        state.token = action.payload
    },
  },
});

export const { setSignupData, setLoading, setToken } = AuthSlice.actions;
export default AuthSlice.reducer;
