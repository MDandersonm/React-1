//해당도메인의 모든 store를 여기에 정의한다.
const initialState = {
  number1: 50,
  number2: 60,
  number3: 70,
};


//actiontype에 따른 로직들을 정의한다. 
const lifeCodingReducer = (state = initialState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case "lifeCoding/plus1":
      console.log("lifeCoding/plus1")
      newState.number1 = newState.number1 + 1;
      return newState;
    case "lifeCoding/plus2":
      newState.number2 = newState.number2 + 2;
      return newState;
    case "lifeCoding/plus3":
      newState.number3 = newState.number3 + 3;
      return newState;

    //   case "plus2":
    //     return {
    //       ...state,
    //       user: action.payload,
    //       isLoading: false,
    //     };
    //   case "plus3":
    //     return {
    //       ...state,
    //       error: action.payload,
    //       isLoading: false,
    //     };
    default:
      return state;
  }
};

export default lifeCodingReducer;

// const func1 = (currentState, action) => {
//   //리덕스는 각각의state의 변화를 불변하게 유지해야되는데 그러기 위해서 새로운 state를 만드는데 과거state를 복제
//   if (currentState === undefined) {
//     //state가 정의되지않았을경우
//     return { number: 10 };
//   }
//   const newState = { ...currentState }; //복제본
//   if (action.type === "plus") {
//     newState.number = newState.number + 2;
//   }
//   return newState;
// };

// const func2 = (currentState, action) => {
//   //리덕스는 각각의state의 변화를 불변하게 유지해야되는데 그러기 위해서 새로운 state를 만드는데 과거state를 복제
//   if (currentState === undefined) {
//     //state가 정의되지않았을경우
//     return { number: 100 };
//   }
//   const newState = { ...currentState }; //복제본
//   if (action.type === "plus") {
//     newState.number = newState.number + 3;
//   }
//   return newState;
// };
// const func3 = (state = { number: 20 }, action) => {
//   switch (action.type) {
//     case "plus":
//       return { ...state, number: state.number + 4 };
//     default:
//       return state;
//   }
// };
