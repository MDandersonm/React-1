import React from "react";
import BlogList from "../components/BlogList";
const ListPage = () => {
  return (
    <div>
      <div className="my-5 d-flex justify-content-between">
        <h1>Blogs</h1>
      </div>

      <BlogList></BlogList>
    </div>
  );
};

export default ListPage;
