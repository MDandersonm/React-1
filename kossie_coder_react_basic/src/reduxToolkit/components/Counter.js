import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Counter = () => {
  const dispatch = useDispatch();
  //   const number = useSelector((state) => state.number);
  const number = useSelector((state) => {
    console.log(state);
    return state.number;
  });
  /*
useSelector 훅은 반환된 상태를 메모화하여 다음 렌더링에 사용합니다. 
즉, 이전에 반환된 상태와 새로 계산된 상태를 비교하고, 
만약 상태가 변경되었다면 컴포넌트는 다시 렌더링됩니다.
여기서 중요한 점은, 상태가 변경될 때마다 useSelector의 콜백 함수가 다시 호출된다는 것입니다.
 따라서, 버튼을 클릭하여 액션을 디스패치하면 상태가 변경되고,
이로 인해 useSelector의 콜백 함수가 다시 호출되어 console.log(state)가 다시 실행됩니다.
  */
  useEffect( ()=>{
    console.log("리렌더링")
  })
  return (
    <div>
      {number}
      <button onClick={() => dispatch({ type: "plus", payload: 2 })}>
        add{" "}
      </button>
    </div>
  );
};

export default Counter;
