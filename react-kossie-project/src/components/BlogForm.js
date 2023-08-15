import React, { useEffect } from "react";
import { useState, useRef } from "react";
import axios from "axios";
import {
  useHistory,
  useParams,
} from "react-router-dom/cjs/react-router-dom.min";
import { bool } from "prop-types";
import propTypes from "prop-types";
// import { v4 as uuidv4 } from "uuid";
// import Toast from "./Toast"; // app.js에서 사용하면서 제거
import { deleteToast } from "../helper";
// import useToast from "../hooks/toast"; // app.js에서 사용하면서 제거

const BlogForm = ({ editing,addToast }) => {
  // const [toasts, addToast, deleteToast] = useToast(); //custom hook 사용// app.js에서 사용하면서 제거
  const [title, setTitle] = useState("");
  const [originalTitle, setOriginalTitle] = useState("");
  const [body, setBody] = useState("");
  const [originalBody, setOriginalBody] = useState("");
  const [publish, setPublish] = useState(false);
  const [originalPublish, setOriginalPublish] = useState(false);
  const [titleError, setTitleError] = useState(false);
  const [bodyError, setBodyError] = useState(false);

  // const [toasts, setToasts] = useState([]); //toast useRef를 쓰면서 주석처리
  // const toasts = useRef([]); //useRef
  // const [, setToastRerender] = useState(false); //useRef가 리랜더링이 안되니 이걸로 리랜더링
  //useState는 set으로 리랜더링일어나는데 useRef는 랜더링 일어나지않음
  //useState는 set했을때 마지막에 한번에 업데이트하는데, useRef는 업데이트하면은 즉시 업데이트됨

  const history = useHistory();
  const { id } = useParams();
  useEffect(() => {
    if (editing) {
      console.log("useEffect");
      axios.get(`http://localhost:3001/posts/${id}`).then((res) => {
        console.log(res);
        setTitle(res.data.title);
        setOriginalTitle(res.data.title);
        setBody(res.data.body);
        setOriginalBody(res.data.body);
        setPublish(res.data.publish);
        setOriginalPublish(res.data.publish);
      });
    }
  }, [id, editing]);

  const isEdited = () => {
    return (
      title !== originalTitle ||
      body !== originalBody ||
      publish !== originalPublish
    );
  }; //수정되었으면 true 아니면 false

  const goBack = () => {
    if (editing) {
      history.push(`/blogs/${id}`);
    } else {
      history.push("/blogs");
    }
  };

  const onChangePublish = (e) => {
    console.log(e.target.checked);
    setPublish(e.target.checked);
  };

  const validateForm = () => {
    let validated = true;

    if (title === "") {
      setTitleError(true);
      validated = false;
    }
    if (body === "") {
      setBodyError(true);
      validated = false;
    }
    return validated;
  };

  // const deleteToast = (id) => {
  //   const filteredToast = toasts.current.filter((toast) => {
  //     return toast.id !== id;
  //   });

  //   // setToasts(filteredToast);//useRef로 바꿈
  //   toasts.current = filteredToast;
  //   setToastRerender(prev=>!prev);
  // };
  // const addToast = (toast) => {
  //   const id = uuidv4();
  //   const toastWithId = {
  //     ...toast,
  //     id: id,
  //   };
  //   // setToasts((prev) => [...prev, toastWithId]); //useRef로 바꿔줌
  //   // setToasts를 통해state를 업데이트시 곧바로하는게 아니라 모아서 하기때문에
  //   //비동기적으로 일어나서 deleteToast할때 업데이트된 toast에 접근되는게아니라
  //   //기존 toast에 접근하게 되는 문제가 발생.
  //   toasts.current = [...toasts.current, toastWithId];
  //   setToastRerender((prev) => !prev); //true면 false로 false면 true로

  //   setTimeout(() => {
  //     // deleteToast(id);
  //     deleteToast(id, toasts, setToastRerender);
  //   }, 5000); //5초후 실행
  // };

  const onSubmit = () => {
    setTitleError(false); //리셋
    setBodyError(false); //리셋
    if (!validateForm()) {
      //validate가 true가 아니면(false면) 종료
      return;
    }

    if (editing) {
      axios
        .patch(`http://localhost:3001/posts/${id}`, {
          title,
          body,
          publish,
        })
        .then((res) => {
          console.log(res);
          history.push(`/blogs/${id}`);
        });
    } else {
      console.log(title, body);
      //json-server --watch db.json --port 3001
      axios
        .post("http://localhost:3001/posts", {
          title: title, // 같은경우 title만 써도 됨 아래와같이 body만 써도됨
          body, // body: body
          publish,
          createdAt: Date.now(),
        })
        .then(() => {
          addToast({
            type: "success",
            text: "Successfully created!",
          });
          history.push("/admin");
        });
    }
  };
  return (
    <div>
      {/* <Toast toasts={toasts.current} deleteToast={deleteToast}></Toast> */}
      {/* <Toast
        // toasts={toasts.current}
        toasts={toasts}
        // deleteToast={(id) => deleteToast(id, toasts, setToastRerender)}
        deleteToast={deleteToast}
      ></Toast> */}
      <h1>{editing ? "Edit" : "Create"} a blog post</h1>
      <div className="mb-3">
        <label className="form-label">Title</label>
        <input
          className={`form-control ${titleError ? "border-danger" : ""}`}
          value={title}
          onChange={(event) => {
            setTitle(event.target.value);
            console.log(event.target.value);
          }}
        ></input>
        {titleError && <div className="text-danger">Title is required.</div>}
      </div>
      <div className="mb-3">
        <label className="form-label">Body</label>
        <textarea
          className={`form-control ${bodyError ? "border-danger" : ""}`}
          value={body}
          onChange={(event) => {
            setBody(event.target.value);
            console.log(event.target.value);
          }}
          rows="10"
        />
      </div>
      {bodyError && <div className="text-danger">Body is required.</div>}
      <div className="form-check mb-3">
        <input
          className="form-check-input"
          type="checkbox"
          checked={publish}
          onChange={onChangePublish}
        ></input>
        <label className="form-check-label">Publish</label>
      </div>

      <button
        className="btn btn-primary"
        onClick={onSubmit}
        disabled={editing && !isEdited()}
      >
        {editing ? "Edit" : "Post"}
      </button>
      <button className="btn btn-danger ms-2" onClick={goBack}>
        Cancel
      </button>
    </div>
  );
};

BlogForm.protoTypes = {
  editing: propTypes.bool,
};

BlogForm.defaultProps = {
  editing: false,
};
export default BlogForm;
