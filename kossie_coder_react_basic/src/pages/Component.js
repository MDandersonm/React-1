import React, { useEffect, useState } from "react";
import Counter from "../components/Counter"
const Fcc = () => {
//     const [count, setCount] = useState(0);
//     const [count1, setCount1] = useState(0);
    
//   const increment =() =>{
//     setCount(count+1)
//   }
    
//   const increment1 =() =>{
//     setCount(count1+1)
//   }
  return (
    <div>
      <h1>Kossie Coder</h1>
      {/* <button onClick={increment}>Click {count}</button> */}
      {/* <button onClick={increment1}>Click {count1}</button> */}
      <Counter></Counter>
      <Counter></Counter>
      <Counter></Counter>
    </div>
  );
};
export default Fcc;
