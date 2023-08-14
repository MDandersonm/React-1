import React from "react";
import PropTypes from "prop-types";
// const Card = (props) => {//props객체 사용방법
const Card = ({ title, children, onClick }) => {
  console.log({ children });
  //구조분해 방법

  return (
    <div className="card my-3 cursor-pointer" onClick={onClick}>
      {/* <div className="card-body">{props.title}</div> */}
      <div className="card-body p-2">
        {/* {title} */}
        {children && <div>{children}</div>}
        {/* //children이 존재하면 출력하라는말 */}
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,//필수값으로 설정
  children:PropTypes.element,//<div>같은데에 감싸야한다는 말.
  onClick:PropTypes.func,
};

Card.defaultProps={//기본값 설정 Card컴퍼넌트에 title={post.title}이 없을경우
    title:'타이틀',
    children:null,
    onClick: ()=>{}
}

export default Card;
