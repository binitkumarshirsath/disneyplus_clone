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
    logut(state) {
      state.name = null;
      state.email = null;
      state.photo = null;
    },
  },
});

export const { login, logut } = userSlice.actions;
export const selectedUserName = (state) => state.user.name;
export const selectedUserEmail = (state) => state.user.email;
export const selectedUserPhoto = (state) => state.user.photo;

export default userSlice.reducer;
