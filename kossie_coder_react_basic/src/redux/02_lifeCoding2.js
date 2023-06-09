import React from "react";
import Left2 from "./components/Left2";
import Right from "./components/Right";


// 전역파일로 적용하는 방법.
const lifeCoding = () => {
  // <Provider store={store}> 도 없고 createStore도 없는데 작동하는 이유는
  //index.js에 전역으로 적용해놨다.  store.js  와 rootReducers.js로 도메인별로 나눠서 reducer를 적용하는 방법을 사용
  return (
    <div>
      <Left2></Left2>
      <Right></Right>
    </div>
  );
};

export default lifeCoding;
