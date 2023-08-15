import React from "react";
import propTypes from "prop-types";
const Toast = ({ toasts, deleteToast }) => {
  //ex) [{text:'asda'}, {text:'asdsd'}]
  return (
    <div className="position-fixed bottom-0 end-0 p-2">
      {toasts.map((toast) => {
        return (
          <div
            key={toast.id}
            onClick={() => {
              deleteToast(toast.id);
            }}
            className={`cursor-pointer alert alert-${
              toast.type || "success"
            } m-0 py-2 mt-2`}
          >
            {toast.text}
          </div>
          //   타입이 없으면 success(초록색) 타입이 있으면 타입값을 넣어주고.
        );
      })}
    </div>
  );
};

Toast.propTypes = {
  toast: propTypes.arrayOf(
    propTypes.shape({
      text: propTypes.string,
      type: propTypes.string,
    })
  ).isRequired,
  deleteToast: propTypes.func.isRequired,
};

Toast.defaultProps = {
  toast: [],
};
export default Toast;
