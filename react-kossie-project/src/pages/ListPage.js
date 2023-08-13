import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Card from "../components/Card";
import { Link } from "react-router-dom";
const ListPage = () => {
  const [posts, setPosts] = useState([]);

  const getPosts = () => {
    axios.get("http://localhost:3001/posts").then((res) => {
      console.log(res);
      setPosts(res.data);
    });
  };
  useEffect(() => {
    //렌더링될떄 실행
    getPosts();
  }, []); //[] 넣으면 딱 1번만 실행

  return (
    <div>
      <div className="my-5 d-flex justify-content-between">
        <h1>Blogs</h1>
        <div>
          <Link to="/blogs/create" className="btn btn-success">Create New</Link>
        </div>
      </div>

      {posts.map((post) => {
        return (
          <Card title={post.title} key={post.id}>
            {/* props의 children 으로 자식컴퍼넌트에서 받을수있다. */}
            <div className="d-flex justify-content-between">
              <div>{post.title}</div>
              <button>button</button>
            </div>
          </Card>
          //   <div className="card my-3" key={post.id}>
          //     <div className="card-body">{post.title}</div>
          //   </div>
        );
      })}
    </div>
  );
};

export default ListPage;
