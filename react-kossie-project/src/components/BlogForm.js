import React from "react";
import { useState } from "react";
import axios from "axios";

const BlogForm = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const onSubmit = () => {
    console.log(title, body);
    //json-server --watch db.json --port 3001
    axios.post("http://localhost:3001/posts", {
      title: title, // 같은경우 title만 써도 됨 아래와같이 body만 써도됨
      body, // body: body
    });
  };
  return (
    <div>
      <h1>Create a blog post</h1>
      <div className="mb-3">
        <label className="form-label">Title</label>
        <input
          className="form-control"
          value={title}
          onChange={(event) => {
            setTitle(event.target.value);
            console.log(event.target.value);
          }}
        ></input>
      </div>
      <div className="mb-3">
        <label className="form-label">Body</label>
        <textarea
          className="form-control"
          value={body}
          onChange={(event) => {
            setBody(event.target.value);
            console.log(event.target.value);
          }}
          rows="20"
        />
      </div>

      <button className="btn btn-primary" onClick={onSubmit}>
        Post
      </button>
    </div>
  );
};

export default BlogForm;