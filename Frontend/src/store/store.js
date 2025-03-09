import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../store/slice/auth.slice"
import profileReducer from "../store/slice/profile.slice"
const store = configureStore({
  reducer: {
    auth: authReducer, 
    profile : profileReducer
  },
});

export default store;
