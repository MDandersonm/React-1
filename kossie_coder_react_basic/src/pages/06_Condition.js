import React, { useState, useEffect } from "react";

const Fcc = () => {
  const [condition, setCondition] = useState(false);
  const toggle = () => setCondition(!condition);
  useEffect(() => {
    console.log(condition);
  }, [condition]);

  const renderCondition = condition ? "True" : "False";

  return (
    <div>
      <div>True</div>
      <div>False</div>
      <hr></hr>
      <div>{renderCondition}</div>

      <button onClick={toggle}> Toggle</button>
    </div>
  );
};
export default Fcc;
