import React, { useEffect, useState } from "react";

const CustomHooks = () => {
  const [data, setData] = useState(null);

  const fetchURL = (type) => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((res) => res.json())
      //   .then((json) => console.log("json", json))
      //   .then((res) => console.log("res", res))//여기서반환값이없어서 밑에 res가 undefined인것.
      .then((json) => setData(json));
    //   .then((res) => console.log("res",  res))//위에 반환값이 없어서 undefined
  };
  useEffect(() => {
    fetchURL("users");
    console.log("첫렌더링");
  }, []);

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
