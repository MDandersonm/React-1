import React from "react";

// const Card = (props) => {//props객체 사용방법
const Card = ({ title, children }) => {
  console.log({ children });
  //구조분해 방법

  return (
    <div className="card my-3">
      {/* <div className="card-body">{props.title}</div> */}
      <div className="card-body">
        {title}
        {children && <div>{children}</div>}
        {/* //children이 존재하면 출력하라는말 */}
      </div>
    </div>
  );
};

export default Card;
