import React, { useEffect, useState } from "react";
import { useFetch } from "./components/UseFetch";
const CustomHooks = () => {
  const { data, fetchURL } = useFetch("users");

  return (
    <div>
      <h1>useFetch</h1>
      <button onClick={() => fetchURL("users")}>Users</button>
      <button onClick={() => fetchURL("posts")}>Posts</button>
      <button onClick={() => fetchURL("todos")}>Todos</button>
      <hr></hr>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default CustomHooks;
