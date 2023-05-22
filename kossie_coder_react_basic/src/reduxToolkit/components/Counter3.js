import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { up } from "../03_reduxToolkit/counterSlice";
import { asyncUpFetch } from "../03_reduxToolkit/counterSlice";
const Counter3 = () => {
  const dispatch = useDispatch();
  const number = useSelector((state) => {
    return state.counter.number;
  });
  const status = useSelector((state) => {
    return state.counter.status;
  });
  return (
    <div>
      <button
        onClick={() => {
          dispatch(up(2));
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          dispatch(asyncUpFetch());
        }}
      >
        + async fetch
      </button>
      <br />
      {number} | {status}
    </div>
  );
};

export default Counter3;
