import React from 'react';

const Content = ({mode}) => {
    return (
        <div
        className="content d-flex justify-content-center align-items-center"
        style={{
          backgroundColor: mode? "black":"white",
          color: mode? "white":"black",
          fontWeight: "bold",
          height: '400px',
          border: '1px solid red'
        }}
      >
        <div >Welcome 홍길동!</div>
      </div>
    );
};

export default Content;