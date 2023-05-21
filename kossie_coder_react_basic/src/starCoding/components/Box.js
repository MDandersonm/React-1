import React, { useEffect, useState } from "react";

// const Box = (props) => {
const Box = ({nn}) => {
  const [style, setStyle] = useState({});
  // #1
  //   useEffect( ()=>{
  //       console.log('박스키우기')
  //   },[props.nn])

//#2
//   useEffect(() => {
//     console.log("박스키우기");
//     setStyle(props.nn());
//     console.log("props.nn()", props.nn());
//     console.log("(props.nn)()", props.nn());
//   }, [props.nn]);

//#3  
// isDark를 누를때마다 리렌더링이 되면서
//매번 새로운 함수(객체)가 생성되므로
//createBoxStyle의 참조주소값이 매번 바뀌게된다.
//그래서 isDark를 눌러도 nn인 createBoxStyle이 변경됐다고 인식되어 useEffect가 실행되는것
  useEffect(() => {
    console.log("박스키우기");
    setStyle(nn());
  }, [nn]);

  

  return (
    //#1함수가이나라 number를 넘겨주면 문제없음
    // <div style={{height:`${props.nn}px`,width:`${props.nn}px`, backgroundColor:'pink'}}>

    // <div style={props.nn()}></div>
    <div style={style}></div>

  );
};

export default Box;
