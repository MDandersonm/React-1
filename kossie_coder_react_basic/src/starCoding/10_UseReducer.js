import React, { useReducer, useState } from "react";
/*
여러하위값을 포함하는 복잡한 state를 다룰때 useReducer활용
state를 업데이트하기위해
내용을 담긴 action을 dispatch에 넣어서 reducer에 전달
reducer는 action내용대로 state를 업데이트시킴

dispatch(action)    ----> reducer(state,action)  --> state업데이트

dispatch라는함수에 action이라는 인자를 넣어 reducer에 전달 
reducer가 state 를action 내용대로 업데이트


reducer: state를 업데이트하는 역할
dispatch: state업데이트를 위한 요구
action:요구의 내용
*/

const UseReducer = () => {
  const [number, setNumber] = useState(0);
  //#1
  //   const [balance, setBalance] = useState(0);
  //   const deposit = () => {
  //     setBalance(number + balance);
  //     setNumber(0);
  //   };

  //      reducer= (현재state,action)=>{}
  const reducer = (state, action) => {
    console.log("reducer작동");
    console.log("state", state);
    console.log("action", action);

    switch (action.type) {
      case "deposit":
        return state + action.payload;
      case "withdrawal":
        return state - action.payload;

      default:
        return state;
    }

    // reducer가 return하는 값이 업데이트될 state값이된다.
    //useReducer도 state가 바뀔때마다 리랜더링해준다.
  };

  // [새로만든state, dispatch함수 ] = useReducer(reducer함수, state초기값)
  const [balance, dispatch] = useReducer(reducer, 0);
  //dispatch를 부르면 reducer가 호출이되는데 reducer의 인자로 action이 전달이됨
  //action을 토대로 state를 변경시킴

  return (
    <div>
      <h1>useReducer은행</h1>
      <span>잔고: {balance} 원</span>
      <br></br>
      {number}
      <br></br>
      <input
        type="number"
        value={number}
        onChange={(e) => {
          const val = parseInt(e.target.value);
          setNumber(isNaN(val) ? 0 : val);
        }}
        step="1000"
      ></input>

      {/* <button onClick={deposit}>예금</button> */}
      <button
        onClick={() => {
          dispatch({ type: "deposit", payload: number });
        }}
      >
        예금
      </button>
      <button
        onClick={() => {
          dispatch({ type: "withdrawal", payload: number });
        }}
      >
        출금
      </button>
    </div>
  );
};

export default UseReducer;
