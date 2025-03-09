import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null, 
  isAuthenticated: false, 
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signUp: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    login: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
    },
  },
});

export const { signUp, login, logout } = authSlice.actions;
export default authSlice.reducer;
