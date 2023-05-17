import React from 'react';

const Event = () => {
  const onSubmit = () => {
    alert("hi");
  };
  const onKeyUp = (event) => {
    if (event.keyCode === 13) {
      console.log("enter")
      onSubmit();
    }
    console.log('key up');
  }
  return (
    <div>
      <input onKeyUp={onKeyUp} />
      <button onClick={onSubmit}>Submit</button>
    </div>
  )

}
export default Event;
