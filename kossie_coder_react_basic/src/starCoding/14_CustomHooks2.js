import React, { useEffect, useState } from "react";
import { useFetch } from "./components/UseFetch";
const CustomHooks = () => {
  const { data: userData } = useFetch("users");
  const { data: postData } = useFetch("posts");
  const { data: todoData } = useFetch("todos");
  return (
    <div>
      <h1>User</h1>

      {/* fetch를 통해 받아오기전에는 userData는 null이라서 오류 userData가 있을때만 가져오겠다라는 뜻 */}
      {userData && <pre>{JSON.stringify(userData[0], null, 2)}</pre>}

      <hr></hr>
      <h1>Post</h1>
      {postData && <pre>{JSON.stringify(postData[0], null, 2)}</pre>}
    </div>
  );
};

export default CustomHooks;
