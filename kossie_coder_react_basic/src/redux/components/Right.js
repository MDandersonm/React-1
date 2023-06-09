import React from "react";
import { useDispatch } from "react-redux";

const Right = () => {
  const dispatch = useDispatch();//useDispatch :state값 변경시킬때
  return (
    <div>
      Right
      <input
        type="button"
        value="plus"
        onClick={() => {
          dispatch({ type: "plus" });
        }}
      ></input>
      {/* 아래plus들은 01_lifeCoding 에서는 작동하지않는다 왜냐하면 01_lifeCoding에서의 Right는 Provider에 의해
      사용하는 store가 정해져있는데 그 store에 연결된 reducer에 "lifeCoding/plus1" 라는 action type이 없기때문. */}
      <hr></hr>
      <input
        type="button"
        value="plus1"
        onClick={() => {
          dispatch({ type: "lifeCoding/plus1" });
        }}
      ></input>
      <input
        type="button"
        value="plus2"
        onClick={() => {
          dispatch({ type: "lifeCoding/plus2" });
        }}
      ></input>
      <input
        type="button"
        value="plus3"
        onClick={() => {
          dispatch({ type: "lifeCoding/plus3" });
        }}
      ></input>
    </div>
  );
};

export default Right;
