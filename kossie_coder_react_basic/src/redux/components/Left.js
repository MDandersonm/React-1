import React from "react";
import { useSelector } from "react-redux";
const Left = () => {
  // const f = (state) => {//state값을 입력값으로받음
  //   return state.number;//state값중 어떤걸 쓸것인지 정함
  // };
  // useSelector는 함수를 인자로받음
  // const number=useSelector(f);//이렇게 해도되고 아래처럼 해도된다.
  const number = useSelector((state) => state.number);//useSelector:어떤state값을 쓰고싶은지 선택
  return <div>Left:{number}</div>;
};

export default Left;
