import React, { useRef } from "react";
import axios from "axios";
import { useState, useEffect, useCallback } from "react";
import Card from "../components/Card";
import { useHistory } from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner";
import { bool } from "prop-types";
import Pagination from "./Pagination";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import propTypes from "prop-types";
import Toast from "./Toast";
import { v4 as uuidv4 } from "uuid";
const BlogList = ({ isAdmin }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1); //현재 페이지번호
  const [numberOfPosts, setNumberOfPosts] = useState(0); //받아온 총 글 수
  const [numberOfPages, setNumberOfPages] = useState(0); //총 만들어야할 페이지수
  const [searchText, setSearchText] = useState(""); //검색란
  const toasts = useRef([]); //useRef
  const [, setToastRerender] = useState(false); //useRef가 리랜더링이 안되니 이걸로 리랜더링

  const [error, setError] = useState("");
  const limit = 2;
  const history = useHistory();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  console.log("location.search", location.search); //?page=8
  console.log("params.get('page')", params.get("page")); //8
  const pageParam = params.get("page");

  useEffect(() => {
    console.log("총페이지수 계산 useEffect", Math.ceil(numberOfPosts / limit));
    setNumberOfPages(Math.ceil(numberOfPosts / limit));
  }, [numberOfPosts]);

  const onClickPagebutton = (page) => {
    //누른 페이지 번호가 page로 들어옴
    history.push(`${location.pathname}?page=${page}`);
    setCurrentPage(page);
    getPosts(page);
  };
  const getPosts = useCallback(
    (page = 1) => {
      //디폴트가 1이라는말
      // 아래처럼 바꿀 수 있다.
      // axios.get(`http://localhost:3001/posts?_page=${page}&_limit=5&_sort=id&_order=desc`).then((res) => {
      let params = {
        _page: page,
        _limit: limit, //받아올 글 개수
        _sort: "id",
        _order: "desc",
        title_like: searchText, //title일부분 일치검색
      };

      if (!isAdmin) {
        params = { ...params, publish: true };
      }
      axios
        .get(`http://localhost:3001/posts`, {
          params, //params: params,
        })
        .then((res) => {
          console.log("받아온 총 글 수", res.headers["x-total-count"]);
          setNumberOfPosts(res.headers["x-total-count"]);
          console.log("받아온 글 리스트들 res.data!", res.data);
          setPosts(res.data);
          setLoading(false);
        })
        .catch((e) => {
          setLoading(false);
          setError("Something went wrong in database");
          addToast({
            text: "Something went wrong",
            type: "danger",
          });
        });
    },
    [isAdmin, searchText]
  ); // useCallback : 함수를 기억을해줌  컴퍼넌트가 랜더링되더라도 새로운 함수를 생성하지않고 기억해놨다가 그대로 사용
  //isAdmin이 변경이되었을때만 함수를 새로 생성.

  useEffect(() => {
    console.log("useEffect2 setCurrentPage, getPosts");
    setCurrentPage(parseInt(pageParam) || 1); //pageParam이 null이면  1

    // ((page = 1) => {
    //   //디폴트가 1이라는말
    //   // 아래처럼 바꿀 수 있다.
    //   // axios.get(`http://localhost:3001/posts?_page=${page}&_limit=5&_sort=id&_order=desc`).then((res) => {
    //   let params = {
    //     _page: page,
    //     _limit: limit, //받아올 글 개수
    //     _sort: "id",
    //     _order: "desc",
    //   };

    //   if (!isAdmin) {
    //     params = { ...params, publish: true };
    //   }
    //   axios
    //     .get(`http://localhost:3001/posts`, {
    //       params, //params: params,
    //     })
    //     .then((res) => {
    //       console.log("받아온 총 글 수", res.headers["x-total-count"]);
    //       setNumberOfPosts(res.headers["x-total-count"]);
    //       console.log("받아온 글 리스트들 res.data!", res.data);
    //       setPosts(res.data);
    //       setLoading(false);
    //     });
    // })(parseInt(pageParam) || 1);//(함수)()  ->함수실행하라는 뜻

    getPosts(parseInt(pageParam) || 1); //위에 새로 정의하고 실행했음
  }, []);
  //   컴퍼넌트가 랜더링이될때마다 getpost 함수는 새로생성된다
  //랜더링될때마다 getpost가 바뀌었구나 인식을해서->
  //useEffect가 실행->set에의해 컴퍼넌트리랜더링 ->함수 새로생성->또 useeffect 실행
  //->무한반복 그래서 getPosts함수를 useEffect내부로 넣어주면 된다. 아니면 useCallback사용
  //
  const deleteToast = (id) => {
    const filteredToast = toasts.current.filter((toast) => {
      return toast.id !== id;
    });
    // setToasts(filteredToast); //useRef쓰면서 제거
    toasts.current = filteredToast;
    setToastRerender((prev) => !prev);
  };
  const addToast = (toast) => {
    const id = uuidv4();
    const toastWithId = {
      ...toast,
      id: id,
    };

    // setToasts((prev) => [...prev, toastWithId]); //useRef쓰면서 제거
    toasts.current = [...toasts.current, toastWithId];
    setToastRerender((prev) => !prev); //true면 false로 false면 true로

    setTimeout(() => {
      deleteToast(id);
    }, 5000); //5초후 실행
  };

  const deleteBlog = (e, id) => {
    e.stopPropagation(); //부모컴퍼넌트의 이벤트발생을 막아줌
    console.log("delete");
    axios
      .delete(`http://localhost:3001/posts/${id}`)
      .then(() => {
        //   setPosts((prevPosts) => {
        //     return prevPosts.filter((post) => {
        //       return post.id !== id;
        //     });
        //   });
        
        //아래처럼하면 5개에서 1개를 지우면 4개가 뜨게된다 
        // setPosts((prevPosts) => prevPosts.filter((post) => post.id !== id)); //중괄호 생략 버전
        
        //아래처럼하면 5개에서 1개를지우면 다시 새로고침되게함
        getPosts(1);
        
        addToast({ text: "Successfully deleted", type: "success" });
      })
      .catch((e) => {
        addToast({ text: "the blog could not be deleted", type: "danger" });
      });
  };
  //   useEffect(() => {
  //     //렌더링될떄 실행
  //     getPosts();
  //   }, []); //[] 넣으면 딱 1번만 실행

  if (loading) {
    return <LoadingSpinner></LoadingSpinner>;
  }
  //   if (posts.length === 0) {
  //     return <div>"No Blog posts found "</div>;
  //   }

  const renderBlogList = () => {
    return (
      posts
        //   .filter((post) => {
        //     return isAdmin || post.publish; //관리자면 모든 post볼수있음.
        //   })
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
        })
    );
  };
  const onSearch = (e) => {
    if (e.key === "Enter") {
      history.push(`${location.pathname}?page=1`);
      setCurrentPage(1);
      getPosts(1);
    }
  };
  if (error) {
    return <div>{error}</div>;
  }
  return (
    <div>
      <Toast toasts={toasts.current} deleteToast={deleteToast} />
      <input
        type="text"
        className="form-control"
        placeholder="Search.."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        onKeyUp={onSearch}
      ></input>
      <hr />
      {posts.length === 0 ? (
        <div>no blog posts found</div>
      ) : (
        <>
          {" "}
          {renderBlogList()}
          {/* onClick이름으로 prop로서 보냄 */}
          {numberOfPages > 1 && (
            <Pagination
              currentPage={currentPage}
              numberOfPages={numberOfPages}
              onClick1={onClickPagebutton}
            ></Pagination>
          )}
        </>
      )}
    </div>
  );
};

BlogList.propTypes = {
  isAdmin: propTypes.bool,
};
BlogList.defaultProps = {
  isAdmin: false,
};
export default BlogList;
