import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

// props를 사용할경우.
// const Footer = ({ mode, setMode }) => {


const Footer = () => {
  const {mode,setMode} = useContext(ThemeContext);
  console.log("mode",mode)
  const changeColor = () => {
    setMode(!mode);
  };

  return (
    <div
      className="d-flex justify-content-end align-items-center"
      style={{
        backgroundColor: mode ? "black" : "lightgray",
        color: mode ? "white" : "black",
        fontWeight: "bold",
      }}
    >
      <button
        onClick={changeColor}
        style={{
          backgroundColor: mode ? "black" : "lightgray",
          color: mode ? "white" : "black",
        }}
      >
        dark mode
      </button>
    </div>
  );
};

export default Footer;
