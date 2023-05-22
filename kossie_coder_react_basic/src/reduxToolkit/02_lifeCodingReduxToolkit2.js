import React from "react";
import { Provider } from "react-redux";
import Counter2 from "./components/Counter2";
import store from './reduxToolKit/store'
const lifeCodingReduxToolkit = () => {



  return (
    <div>
      <Provider store={store}>
        <Counter2></Counter2>
      </Provider>
    </div>
  );
};

export default lifeCodingReduxToolkit;
