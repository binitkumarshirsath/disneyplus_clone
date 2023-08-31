import { createSlice } from "@reduxjs/toolkit";

const userInitialState = {
  name: "",
  email: "",
  photo: "",
};

const userSlice = createSlice({
  name: "user",
  initialState: userInitialState,
  reducers: {
    login(state, action) {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.photo = action.payload.photo;
    },
    logout(state) {
      state.name = null;
      state.email = null;
      state.photo = null;
    },
  },
});
export const { login, logout } = userSlice.actions;
export const selectedUserName = (state) => state.auth.name;
export const selectedUserEmail = (state) => state.auth.email;
export const selectedUserPhoto = (state) => state.auth.photo;

export default userSlice.reducer;
