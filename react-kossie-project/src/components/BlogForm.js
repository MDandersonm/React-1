import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import {
  useHistory,
  useParams,
} from "react-router-dom/cjs/react-router-dom.min";
import { bool } from "prop-types";

const BlogForm = ({ editing }) => {
  const [title, setTitle] = useState("");
  const [originalTitle, setOriginalTitle] = useState("");
  const [body, setBody] = useState("");
  const [originalBody, setOriginalBody] = useState("");
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
      });
    }
  }, [id, editing]);

  const isEdited = () => {
    return title !== originalTitle || body !== originalBody;
  }; //수정되었으면 true 아니면 false

  const goBack= ()=>{
    if(editing){
      history.push(`/blogs/${id}`)
    }else{
      history.push('/blogs');
    }
  }
  const onSubmit = () => {
    if (editing) {
      axios
        .patch(`http://localhost:3001/posts/${id}`, {
          title,
          body,
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
          createdAt: Date.now(),
        })
        .then(() => {
          history.push("/blogs");
        });
    }
  };
  return (
    <div>
      <h1>{editing ? "Edit" : "Create"} a blog post</h1>
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
          rows="10"
        />
      </div>



      
      <button
        className="btn btn-primary"
        onClick={onSubmit}
        disabled={editing && !isEdited()}
      >
        {editing ? "Edit" : "Post"}
      </button>
      <button
        className="btn btn-danger ms-2"
        onClick={goBack}
      >
        Cancel
      </button>
    </div>
  );
};

BlogForm.protoTypes = {
  editing: bool,
};

BlogForm.defaultProps = {
  editing: false,
};
export default BlogForm;
