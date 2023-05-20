import React, { useEffect, useState, useMemo } from "react";

const UseMemo = () => {
  const hardCalculate = (num) => {
    for (let i = 0; i < 999999999; i++) {}
    console.log("무거운 hardCalculate작동");
    return num + 10000;
  };
  const easyCalculate = (num) => {
    console.log("easyCalculate 작동");
    return num + 1;
  };
  useEffect(() => {
    console.log("리렌더링");
  });

  const [hardNumber, setHardNumber] = useState(0);
  const [easyNumber, setEasyNumber] = useState(0);

  const hardSum = useMemo(() => {
    return hardCalculate(hardNumber);
  }, [hardNumber]);
  //hardNumber가 변경이 될때만 hardCalculate를 계산
  //변경되지않았으면 그 전에 갖고있던 hardSum값을 사용

  const easySum = easyCalculate(easyNumber);
  return (
    <div>
      <h3>어려운 계산기</h3>

      <input
        type="number"
        value={hardNumber}
        onChange={(e) => setHardNumber(parseInt(e.target.value))}
      ></input>
      +10000=
      <span>{hardSum}</span>


      <h3>쉬운 계산기</h3>
      <input
        type="number"
        value={easyNumber}
        onChange={(e) => setEasyNumber(parseInt(e.target.value))}
      ></input>
      +1=
      <span>{easySum}</span>
    </div>
  );
};
// 쉬운계산기를 작동시키면 state가 변하기때문에 렌더링이되는데
// 렌더링될때 함수 컴퍼넌트가 재호출되기때문에 어려운계산도 작동이된다.

export default UseMemo;
