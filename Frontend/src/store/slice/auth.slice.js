import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isAuthenticated: false,
  token: localStorage.getItem("token") || null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signUp: (state, action) => {
      state.user = action.payload.data;
      state.isAuthenticated = true;
      localStorage.setItem("token", action.payload.token);
      state.token = action.payload.token;
    },
    login: (state, action) => {
      state.user = action.payload.data;
      state.isAuthenticated = true;
      localStorage.setItem("token", action.payload.token);
      state.token = action.payload.token;
    },
    logout: (state) => {
        localStorage.removeItem("token");
        state.user = null;
        state.isAuthenticated = false;
        state.token = null;
      },
  },
});

export const { signUp, login, logout } = authSlice.actions;
export default authSlice.reducer;
