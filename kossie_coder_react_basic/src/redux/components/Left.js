import React from "react";
import { useSelector } from "react-redux";
const Left = () => {
  const f = (state) => {
    return state.number;
  };
  // useSelector는 함수를 인자로받음
  // const number=useSelector(f);
  const number = useSelector((state) => state.number);
  return <div>Left:{number}</div>;
};

export default Left;
