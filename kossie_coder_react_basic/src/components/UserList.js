import React, { useState } from "react";

const UserList = ({ users }) => {
  console.log("users!!", users);
  return (
    <>
      {users.map((user) => {
        return (
          <div className="card my-2" key={user.id}>
            <div className="card-body p-3">{user.name}</div>
          </div>
        );
      })}
    </>
  );
};
export default UserList;
