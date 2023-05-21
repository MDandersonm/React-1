import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import Left from "./components/Left";
import Right from "./components/Right";
//provider:컴퍼넌트
//useSelector:어떤state값을 쓰고싶은지 선택
//useDispatch :state값 변경시킬때
//connect

const reducer = (currentState, action) => {
  //리덕스는 각각의state의 변화를 불변하게 유지해야되는데 그러기 위해서 새로운 state를 만드는데 과거state를 복제
  if (currentState === undefined) {
    //state가 정의되지않았을경우
    return { number: 1 };
  }
  const newState = { ...currentState }; //복제본
  if (action.type === "plus") {
    newState.number++;
  }
  return newState;
};
const store = createStore(reducer);

const lifeCoding = () => {
  return (
    <div>
      {/* Provider안에있는컴퍼넌트들은 store를사용할수 있게됨 */}
      <Provider store={store}>
        <Left></Left>
        <Right></Right>
      </Provider>
    </div>
  );
};

export default lifeCoding;
