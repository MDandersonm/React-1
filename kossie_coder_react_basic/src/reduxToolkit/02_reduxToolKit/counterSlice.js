import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counterSliceName",
  initialState: { number: 0 },
  reducers: {
    //액션타입명
    up: (state, action) => {
      state.number = state.number + action.payload;
    },
    down: (state, action) => {
      state.number = state.number - action.payload;
    },
  },
});
export default counterSlice;
export const {up}=counterSlice.actions;
