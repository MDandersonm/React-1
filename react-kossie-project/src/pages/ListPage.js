import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Card from "../components/Card";
import { Link, useHistory } from "react-router-dom";
const ListPage = () => {
  const [posts, setPosts] = useState([]);
  const history = useHistory();
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
          <Link to="/blogs/create" className="btn btn-success">
            Create New
          </Link>
        </div>
      </div>

      {posts.map((post) => {
        return (
          <Card
            title={post.title}
            key={post.id}
            onClick={() => history.push("/blogs/edit")}
          >
            {/* 함수도 props로 내려줄수있다. */}
            {/* props의 children 으로 자식컴퍼넌트에서 받을수있다. */}
            <div className="d-flex justify-content-between">
              <div>{post.title}</div>
              <div>
                <button className="btn btn-danger btn-sm" onClick={(e)=>{
                    e.stopPropagation();//부모컴퍼넌트의 이벤트발생을 막아줌
                    console.log("delete")}}>Delete</button>
              </div>
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
