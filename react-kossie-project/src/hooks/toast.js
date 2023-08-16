import { useState, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import { addToast as add, removeToast} from "../store/toastSlice";
import {useDispatch} from 'react-redux'
const useToast = () => {
  const toasts = useRef([]); //useRef
  const [, setToastRerender] = useState(false);
  const dispatch = useDispatch();

  const deleteToast = (id) => {
    //redux를사용하면서 아래 전부 주석
    // const filteredToast = toasts.current.filter((toast) => {
    //   return toast.id !== id;
    // });

    // // setToasts(filteredToast);//useRef로 바꿈
    // toasts.current = filteredToast;
    // setToastRerender((prev) => !prev);
    dispatch(removeToast(id))
  };
  const addToast = (toast) => {
    const id = uuidv4();
    const toastWithId = {
      ...toast,
      id: id,
    };
    // setToasts((prev) => [...prev, toastWithId]); //useRef로 바꿔줌
    // setToasts를 통해state를 업데이트시 곧바로하는게 아니라 모아서 하기때문에
    //비동기적으로 일어나서 deleteToast할때 업데이트된 toast에 접근되는게아니라
    //기존 toast에 접근하게 되는 문제가 발생.

    //아래는 redux를 사용하면서 주석처리.
    // toasts.current = [...toasts.current, toastWithId]; 
    // setToastRerender((prev) => !prev); //true면 false로 false면 true로

    dispatch(add(toastWithId))// toastWithId가 payload로 들어갈것.
    //dispatch를 통해서 action을 보냄(payload와 type을 가지고있는 객체를 dispatch를 통해 보냄)
    //그러면 액션에서 타입을 확인 타입이 toast이고 addToast함수를 실행시킴

    setTimeout(() => {
      deleteToast(id);
    //   deleteToast(id, toasts, setToastRerender);
    }, 5000); //5초후 실행
  };

//   return [//useToast()로 가져올때 const [addToast,deleteToast]로 순서대로 맞춰서 해야한다
//     // toasts.current,
//     addToast,
//     deleteToast 
//   ]
  return{//객체형으로 사용하면 필요한 이름 가져다 쓸수있다.
    addToast,//축약형이다.
    deleteToast
  }
};
export default useToast;
