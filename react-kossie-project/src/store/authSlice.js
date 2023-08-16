import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isLoggedIn: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState: initialState, //initialState로 축약가능
  reducers: {
    login: (state) => {
      localStorage.setItem('isLoggedIn','yes');
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      localStorage.removeItem('isLoggedIn');
    },
  },
});

// Action creators are generated for each case reducer function
export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
