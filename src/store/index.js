import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../store/userSlice";

const store = configureStore({
  reducer: {
    auth: userReducer,
  },
});

export default store;
