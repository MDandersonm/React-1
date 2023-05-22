import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import Counter from "./components/Counter";

//reduxToolkit 만들기 전상태.
const lifeCodingReduxToolkit = () => {
  const initialState = {
    number: 0,
  };
  const reducer = (state=initialState, action) => {
    if (action.type === "plus") {
      return {...state, number: state.number+action.payload}
      /*
state.number++ 이 작동하지 않는 이유는 Redux에서 state가 불변 객체(immutable object)이어야 한다는 규칙 때문입니다.
state.number++ 코드는 number 프로퍼티를 직접 수정하려고 시도합니다. 이것은 불변성을 깨뜨리게 되어, 
Redux가 상태 변경을 감지하고 컴포넌트를 다시 렌더링하지 못하게 합니다.
      */
    }
    return state
  };

  const store = createStore(reducer);
  return (
    <div>
      <Provider store={store}>
        <Counter></Counter>
      </Provider>
    </div>
  );
};

export default lifeCodingReduxToolkit;
