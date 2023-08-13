import React from "react";
import PropTypes from "prop-types";
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

Card.propTypes = {
  title: PropTypes.string.isRequired,//필수값으로 설정
  children:PropTypes.element//<div>같은데에 감싸야한다는 말.
};

Card.defaultProps={//기본값 설정 Card컴퍼넌트에 title={post.title}이 없을경우
    title:'타이틀',
    children:null
}

export default Card;
