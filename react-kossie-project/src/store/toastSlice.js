import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  toasts: [],
};

export const toastSlice = createSlice({
  name: "toast",
  initialState: initialState, //initialState로 축약가능
  reducers: {
    //state를 변경해줄수 있음
    addToast: (state, action) => {
      //state는 initialState를 말함
      //state.toasts하면 state에 접근가능
      state.toasts.push(action.payload);
      //action:
    },
    removeToast: (state, action) => {
        state.toasts= state.toasts.filter(toast=>{
            return toast.id !== action.payload
        })
    },
  },
});

console.log(
  "toastSlice.actions.addToast('hello')",
  toastSlice.actions.addToast("hello")
);

// Action creators are generated for each case reducer function
export const { addToast , removeToast} = toastSlice.actions;

export default toastSlice.reducer;
