import React from "react";

const Header = ({mode}) => {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        backgroundColor: mode ? 'black' :"lightgray",
        color: mode? 'white':"black",
        fontWeight: "bold",
      }}
    >
      <div >Welcome 홍길동!</div>
    </div>
  );
};

export default Header;
