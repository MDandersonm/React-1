import React, { useCallback, useState } from "react";
import Box from "./components/Box";

const UseCallback2 = () => {
  const [number, setNumber] = useState(100);
  const [isDark, setIsDark] = useState(false);

  //#3
  // isDark를 누를때마다 리렌더링이 되면서
  //매번 새로운 함수(객체)가 생성되므로
  //createBoxStyle의 참조주소값이 매번 바뀌게된다.
  //그래서 isDark를 눌러도 nn인 createBoxStyle이 변경됐다고 인식되어 useEffect가 실행되는것
  //   const createBoxStyle = () => {
  //     return {
  //       backgroundColor: "pink",
  //       height: `${number}px`,
  //       width: `${number}px`,
  //     };
  //   };


  //#4 number가 바뀔때만 함수가 작동하도록함.
  const createBoxStyle = useCallback(() => {
    return {
      backgroundColor: "pink",
      height: `${number}px`,
      width: `${number}px`,
    };
  }, [number]);
  return (
    <div style={{ backgroundColor: isDark ? "black" : "white" }}>
      <input
        type="number"
        onChange={(e) => {
          setNumber(e.target.value);
        }}
        value={number}
      ></input>
      {/*  //#1 함수가이나라 number를 넘겨주면 문제없음 */}
      {/* <Box nn={number}></Box> */}
      <Box nn={createBoxStyle}></Box>

      <button onClick={() => setIsDark(!isDark)}>isDark</button>
    </div>
  );
};

export default UseCallback2;
