import React from "react";

const InputField = ({ type, placeholder, value, onChange, ErrorMessage }) => {
  return (
    // <div>
    <React.Fragment>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      ></input>
      <div style={{ color: "red" }}>{ErrorMessage}</div>
    </React.Fragment>
    // </div>
  );
};
export default InputField;
