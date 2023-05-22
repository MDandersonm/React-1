import { createStore } from "redux";
import rootReducer from "./rootReducers"; // 여러분의 리듀서 파일을 가리킵니다.

const store = createStore(rootReducer);

export default store;
