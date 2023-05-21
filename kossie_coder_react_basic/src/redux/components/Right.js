import React from "react";
import { useDispatch } from "react-redux";
const Right = () => {
  const dispatch = useDispatch();
  return (
    <div>
      Right
      <input
        type="button"
        value="+"
        onClick={() => {
          dispatch({ type: "plus" });
        }}
      ></input>
    </div>
  );
};

export default Right;
