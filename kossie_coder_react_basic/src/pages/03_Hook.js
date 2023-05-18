import React, { useState } from "react";
const Hook = () => {
  const [text, setText] = useState("Kossie");
  // kossie값을 text에 담고 텍스트값을 업데이트할때setText이용

  // let text='kossie';

  const updateText = () => {
    // text='Coder';
    setText("Coder");
    console.log(text);
    //state가 업데이트가되고나서 컴퍼넌트가 다시실행되서 렌더링을 다시하게되면서
  };
  console.log(text);
  return (
    <div>
      <span>{text}</span>
      <button onClick={updateText}>Update</button>
    </div>
  );
};
export default Hook;
