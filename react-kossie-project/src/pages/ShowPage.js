import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import LoadingSpinner from "../components/LoadingSpinner";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
const ShowPage = () => {
  const { id } = useParams(); //url에있는 id부분을 가져와서 사용가능
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  console.log(id);

  const getPost = (id) => {
    axios.get(`http://localhost:3001/posts/${id}`).then((res) => {
      console.log(res);
      setPost(res.data);
      setLoading(false);
    });
  };

  useEffect(() => {
    getPost(id);
  }, [id]); //의존성배열. id가 바뀔때만 리랜더링

  const printDate = (timestamp) => {
    return new Date(timestamp).toLocaleString();
  };
  if (loading) {
    return <LoadingSpinner />;
  }
  return (
    <div>
      <div className="d-flex">
        <h1 className="flex-grow-1">{post.title}</h1>{" "}
        <div>
          <Link className="btn btn-primary" to={`/blogs/${id}/edit`}>
            Edit
          </Link>
        </div>
      </div>

      <small className="text-muted">
        Created At: {printDate(post.createdAt)}
      </small>
      <hr />
      <p>{post.body}</p>
      {/* <button onClick={()=>{history.push('/blogs/3')}}>Click</button> */}
    </div>
  );
};

export default ShowPage;
