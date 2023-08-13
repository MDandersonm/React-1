import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Card from "../components/Card";
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
      <h1 className="my-5">Blogs</h1>
      {posts.map((post) => {
        return (
          <Card title={post.title} key={post.id}></Card>
          //   <div className="card my-3" key={post.id}>
          //     <div className="card-body">{post.title}</div>
          //   </div>
        );
      })}
    </div>
  );
};

export default ListPage;
