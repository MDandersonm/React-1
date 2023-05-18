import React, { useEffect, useState } from "react";
import axios from "axios";
import UserList from "../components/UserList";
import Spinner from "../components/Spinner";
const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      console.log(res);
      setUsers(res.data);
      setLoading(false);
    });
  }, []); //첫렌더링에만 실행

  useEffect(() => {
    console.log("users:", users);
  }, [users]); //users가 변경될때마다 실행
  return (
    <div>
      {loading ? <Spinner></Spinner> : <UserList users={users}></UserList>}
    </div>
  );
};
export default Users;
