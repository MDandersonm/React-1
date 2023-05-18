import React, { useState } from "react";
import { Link } from "react-router-dom";
const UserList = ({ users }) => {
  console.log("users!!", users);
  return (
    <>
      {users.map((user) => {
        return (
          <div className="card my-2" key={user.id}>
            <div className="card-body p-3">
              <Link to={`/users/${user.id}` } style={{ color: 'inherit', textDecoration: 'none' }} >{user.name}</Link>
            </div>
          </div>
        );
      })}
    </>
  );
};
export default UserList;

