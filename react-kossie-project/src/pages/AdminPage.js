import React from "react";
import { Link} from "react-router-dom";

import BlogList from "../components/BlogList";
const AdminPage = () => {

  return (
    <div>
      <div className="my-5 d-flex justify-content-between">
        <h1>Admin</h1>
        <div>
          <Link to="/blogs/create" className="btn btn-success">
            Create New
          </Link>
        </div>
      </div>

      <BlogList isAdmin={true}></BlogList>
    </div>
  );
};

export default AdminPage;
