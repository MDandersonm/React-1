import React from "react";
import { Provider } from "react-redux";
import Counter3 from "./components/Counter3";
import store from "./03_reduxToolkit/store";
const lifeCodingReduxToolKitThunk = () => {
  return (
    <div>
      <Provider store={store}>
        <Counter3></Counter3>
      </Provider>
    </div>
  );
};

export default lifeCodingReduxToolKitThunk;
