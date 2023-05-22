import React from "react";
import { useDispatch, useSelector } from "react-redux";
import counterSlice from "../02_reduxToolKit/counterSlice";
import {up} from '../02_reduxToolKit/counterSlice';
const Counter2 = () => {
  const dispatch = useDispatch();
  const number = useSelector((state) => {
    console.log(state);
    return state.counter.number;
  });
  return (
    <div>
      {number}
      <button
        onClick={() =>
          // dispatch({ type: "counterSliceName/up", payload: 2 })
          dispatch(up(2))
        }
      >
        up
      </button>
      <button
        onClick={() =>
          // dispatch({ type: "counterSliceName/down", payload: 2 })
          dispatch(counterSlice.actions.down(2))
        }
      >
        down
      </button>
    </div>
  );
};

export default Counter2;
