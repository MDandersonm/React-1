import React from "react";
import { useSelector } from "react-redux";
const Left = () => {
  const f = (state) => {
    return state.number;
  };
  // useSelector는 함수를 인자로받음
  // const number=useSelector(f);
  const number1 = useSelector((state) => state.lifeCoding.number1);
  const number2 = useSelector((state) => state.lifeCoding.number2);
  const number3 = useSelector((state) => state.lifeCoding.number3);
  return (
    <div>
      <div>Left:{number1}</div>
      <div>Left:{number2}</div>
      <div>Left:{number3}</div>
    </div>
  );
};

export default Left;
