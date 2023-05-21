import { useEffect, useState } from "react";

export function useFetch(type) {
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
    console.log("useEffect!")
    fetchURL(type);
  }, []);
  return { data, fetchURL };
}
