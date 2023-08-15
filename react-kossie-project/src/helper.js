export const deleteToast = (id,toasts, setToastRerender) => {
    const filteredToast = toasts.current.filter((toast) => {
      return toast.id !== id;
    });

    // setToasts(filteredToast);//useRef로 바꿈
    toasts.current = filteredToast;
    setToastRerender(prev=>!prev);
  };