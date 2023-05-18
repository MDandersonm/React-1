import React, { useEffect, useState } from "react";
import axios from "axios";
import UserList from "../components/UserList";
import Spinner from "../components/Spinner";
import { useParams } from "react-router-dom";
const User = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  console.log("id", id);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users/" + id)
      .then((res) => {
        console.log(res.data);
        setUser(res.data);
        setLoading(false);
      });
  }, []); //첫렌더링에만 실행

  const userDetail = loading ? (
    <Spinner></Spinner>
  ) : (
    <div>
      <div>{user.name}</div>
      <div>{user.email}</div>
      <div>{user.phone}</div>
    </div>
  );
  return (
    <div>
      {userDetail}
    </div>
  );

  // return (
  //   <div>
  //     {loading ? <Spinner></Spinner> : <UserList users={[user]}></UserList>}
  //   </div>
  // );
};
export default User;
