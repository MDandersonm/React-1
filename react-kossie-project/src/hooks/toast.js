import { useState, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
const useToast = () => {
  const toasts = useRef([]); //useRef
  const [, setToastRerender] = useState(false);

  const deleteToast = (id) => {
    const filteredToast = toasts.current.filter((toast) => {
      return toast.id !== id;
    });

    // setToasts(filteredToast);//useRef로 바꿈
    toasts.current = filteredToast;
    setToastRerender((prev) => !prev);
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
    toasts.current = [...toasts.current, toastWithId];
    setToastRerender((prev) => !prev); //true면 false로 false면 true로

    setTimeout(() => {
      // deleteToast(id);
      deleteToast(id, toasts, setToastRerender);
    }, 5000); //5초후 실행
  };

  return [
    toasts.current,
    addToast,
    deleteToast
  ]
};
export default useToast;
