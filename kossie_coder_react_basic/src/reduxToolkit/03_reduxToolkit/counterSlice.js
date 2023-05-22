import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//createAsyncThunk는 비동기 작업을 처리하는 action을 만들어준다.
//"counterSlice/asyncUpFetch"는 타입을 적은것(아무거나적어도됨)
//
const asyncUpFetch = createAsyncThunk("counterSlice/asyncUpFetch", async () => {
  const resp = await fetch(
    // "https://api.countapi.xyz/hit/opesaljkdfslkjfsadf.com/visits"
    "https://jsonplaceholder.typicode.com/todos"
  );
  const data = await resp.json();
  console.log("resp.json()", data);
  console.log("data.value", data.value);
  //   return data.value;
  return data.length;
});

const counterSlice = createSlice({
  name: "counterSliceName",
  initialState: { number: 0, status: "Welcome" },
  reducers: {
    up: (state, action) => {
      state.number = state.number + action.payload;
    },
  },
//reducers를 사용하면 toolkit이 aciton creator를 자동으로 만들어 준다.
//하지만 creatAsyncThunk로 만든 비동기 작업은 action creator를 자동으로 생성하지 못하기 때문에, 
//slice의 extraReducers에 직접   action creator를 정의한다.

  extraReducers: (builder) => {
    //세가지 상태별로 reducer 적용 
    builder.addCase(asyncUpFetch.pending, (state, action) => {
      state.status = "Loading";//비동기작업 시작했을때
    });
    builder.addCase(asyncUpFetch.fulfilled, (state, action) => {
      state.number = action.payload;
      state.status = "complete";//데이터를 가져왔을때
    });
    builder.addCase(asyncUpFetch.rejected, (state, action) => {
      state.status = "fail";//오류로 인한 중단
    });
  },
});

export default counterSlice;
export const { up } = counterSlice.actions;
export { asyncUpFetch };
