import React, { useCallback, useEffect, useState } from "react";

const UseCallback = () => {
  const [number, setNumber] = useState(0);
  const [toggle, setToggle] = useState(true);

  //#1
  //someFunc이 그대로인데도 number를 바꿔주면 useEffect가작동
  //number를 바꿔주면 state가 변경되서 리렌더링되면서 함수컴퍼넌트가 재호출되는데
  //그때마다 함수의 변수는 초기화되고
  //그때마다 함수가 새로생성(함수도 객체이다) 그래서 함수 참조값(메모리공간안에있는 함수를 참조)이 someFunc에 들어가는데
  //이 참조값(메모리주소) 이 매번 랜더링 될때마다 바뀌니까 작동하는것이다.

  // const someFunc = () => {
  //   console.log(`someFunc작동 number:${number}`);
  //   return;
  // };

  //#2
  // 이렇게하면 처음렌더링될때 할당된 someFunc변수가 가리키는 함수객체주소가 메모이제이션되어서
  //항상 number가0 으로나옴
  //   const someFunc = useCallback(() => {
  //     console.log(`someFunc작동 number:${number}`);
  //     return;
  //   }, []);

  //#3
  // number가 바뀔때마다 함수가 재생성되서 다시 메모이제이션되고 someFunction안에는 새로운 주소가 들어있고
  //someFunc이 바뀌었으니까 useEffect가 발동
  const someFunc = useCallback(() => {
    console.log(`someFunc작동 number:${number}`);
    return;
  }, [number]);

  useEffect(() => {
    console.log("someFunction 변경 useEffect");
  }, [someFunc]);

  return (
    <div>
      <input
        type="number"
        onChange={(e) => {
          setNumber(e.target.value);
        }}
        value={number}
      ></input>
      {number}
      <br></br>
      <button onClick={someFunc}>Call someFunc</button>
      
      {/* true/false버튼을 눌러도 someFunc작동하지않아야한다 */}
      <button
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        {toggle.toString()}
      </button>
      
    </div>
  );
};

export default UseCallback;
