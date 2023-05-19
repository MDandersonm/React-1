import React, { useEffect, useState } from "react";
const Fcc = () => {
  const [count, setCount] = useState(0);
  const [kossie, setKossie] = useState(0);
  useEffect(() => {
    console.log("effect함수실행1");
  }); //렌더링되고 실행시켜줌
  
  useEffect(() => {
    console.log("effect함수실행2");
  },[count]); //첫렌더링 + count가 변경되었을때만 실행

  useEffect(() => {
    console.log("effect함수실행3");
  },[count,kossie]); //첫렌더링 + count,kossie가 변경되었을때만 실행
  useEffect(() => {
    console.log("first useEffect");
  },[]); //첫렌더링에만 실행



  console.log("lendering",count);
  // state가 변경될때마다 컴퍼넌트가 리 랜더링

  const increment =() =>{
    setCount(count+1)
  }
  //click 누를때마다  state가 변경될때마다 컴퍼넌트가 리랜더링일어남 그후 useEffect실행시켜줌
  return (
    <div>
      <h1>Kossie Coder</h1>
      <button onClick={increment}>Click</button>
      <button onClick={()=>setKossie(kossie+1)}>Click1</button>
      {/* state이기때문에 누를때마다 리렌더링이 일어나고 useEffect가 실행됨. */}
    </div>
  );
};
export default Fcc;
