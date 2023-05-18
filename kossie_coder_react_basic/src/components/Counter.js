import React,{ useState} from "react";

const Counter = (props) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  const clickString = props.name1 || 'default';
  // props.name1이 존재하면 사용하고 존재하지않으면 default사용

  return (
    <div>
      <button onClick={increment}>{clickString} {count}</button>
    </div>
  );
};
export default Counter;
