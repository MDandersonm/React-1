import React from "react";

const Student = ({ student, dispatch }) => {
  return (
    <div>
      <span
        style={{
          color: student.isHere ? "gray" : "",
          textDecoration: student.isHere ? "line-through":"",
        }}
        onClick={() => dispatch({ type: "check", payload: student.id })}
      >
        {student.name}
      </span>
      <button onClick={() => dispatch({ type: "delete", payload: student.id })}>
        삭제
      </button>
    </div>
  );
};

export default Student;
