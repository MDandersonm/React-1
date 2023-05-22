import React from "react";
import { useDispatch } from "react-redux";

const Right = () => {
  const dispatch = useDispatch();
  return (
    <div>
      Right
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
