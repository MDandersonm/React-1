import { combineReducers } from "redux";
import lifeCodingReducer from './redux/reducers/lifeCodingReducer';

const rootReducers = combineReducers({
  lifeCoding: lifeCodingReducer,
});

export default rootReducers;
