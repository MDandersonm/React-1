import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Card from "../components/Card";
import { useHistory } from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner";
import { bool } from "prop-types";
import Pagination from "./Pagination";
const BlogList = ({ isAdmin }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const history = useHistory();

  const getPosts = (page=1) => {//디폴트가 1이라는말
    axios.get(`http://localhost:3001/posts?_page=${page}&_limit=5&_sort=id&_order=desc`).then((res) => {
      console.log(res);
      setPosts(res.data);
      setLoading(false);
    });
  };
  const deleteBlog = (e, id) => {
    e.stopPropagation(); //부모컴퍼넌트의 이벤트발생을 막아줌
    console.log("delete");
    axios.delete(`http://localhost:3001/posts/${id}`).then(() => {
      //   setPosts((prevPosts) => {
      //     return prevPosts.filter((post) => {
      //       return post.id !== id;
      //     });
      //   });
      setPosts((prevPosts) => prevPosts.filter((post) => post.id !== id)); //중괄호 생략 버전
    });
  };
  useEffect(() => {
    //렌더링될떄 실행
    getPosts();
  }, []); //[] 넣으면 딱 1번만 실행

  if (loading) {
    return <LoadingSpinner></LoadingSpinner>;
  }
  if (posts.length === 0) {
    return <div>"No Blog posts found "</div>;
  }

  const renderBlogList = () => {
    return posts
      .filter((post) => {
        return isAdmin || post.publish; //관리자면 모든 post볼수있음.
      })
      .map((post) => {
        return (
          <Card
            title={post.title}
            key={post.id}
            onClick={() => history.push(`/blogs/${post.id}`)}
          >
            {/* 함수도 props로 내려줄수있다. */}
            {/* props의 children 으로 자식컴퍼넌트에서 받을수있다. */}
            <div className="d-flex justify-content-between align-items-center">
              <div className="mx-2">{post.title}</div>
              {isAdmin ? (
                <div>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={(e) => deleteBlog(e, post.id)}
                  >
                    Delete
                  </button>
                </div>
              ) : null}
            </div>
          </Card>
          //   <div className="card my-3" key={post.id}>
          //     <div className="card-body">{post.title}</div>
          //   </div>
        );
      });
  };
  return (
    <div>
      {renderBlogList()}
      <Pagination></Pagination>
    </div>
  );
};

BlogList.propTypes = {
  isAdmin: bool,
};
BlogList.defaultProps = {
  isAdmin: false,
};
export default BlogList;
