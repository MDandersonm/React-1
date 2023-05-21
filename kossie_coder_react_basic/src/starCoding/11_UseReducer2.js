import React, { useReducer, useState } from "react";
import Student from "./components/Student";
const UseReducer = () => {
  const [name, setName] = useState("");

  const reducer = (state, action) => {
    console.log("reducer작동");
    console.log("state", state);
    console.log("action", action);

    switch (action.type) {
      case "add":
        console.log("state.students", state.students);
        const newStudent = {
          id: Date.now(),
          name: action.payload.name,
          isHere: false,
        };
        return {
          count: state.count + 1,
          students: [...state.students, newStudent],
        };
      case "delete":
        return {
          count: state.count - 1,
          students: state.students.filter((student) => {
            return student.id !== action.payload;
          }),
        };
      case "check":
        return {
          count: state.count,
          students: state.students.map((student) => {
            console.log("student.id", student.id);
            if (student.id === action.payload) {
              return { ...student, isHere: !student.isHere };
            }
            return student;
          }),
        };

      default:
        return state;
    }
  };
  const initialState = {
    count: 1,
    students: [
      {
        id: Date.now(),
        name: "이진수",
        isHere: false,
      },
    ],
  };
  const [studentsInfo, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>출석부</h1>
      <span>총 학생수: {studentsInfo.count}</span>
      <br></br>
      {name}
      <br></br>
      <input
        type="type"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      ></input>

      <button
        onClick={() => {
          dispatch({ type: "add", payload: { name } });
          setName("");
        }}
      >
        추가
      </button>
      {studentsInfo.students.map((student) => {
        return (
          <Student
            key={student.id}
            student={student}
            dispatch={dispatch}
          ></Student>
        );
      })}
    </div>
  );
};

export default UseReducer;
