import React, {useState} from 'react';
const Counter = () =>{
    const [num, setNumber] = useState(0);//첫번째 num 은 0을 기본값으로 갖는 변수값.  두번째setNumber는 num변수에 대한 setter함수(앞의 값을 셋팅함)
    
    const increase = () =>{
        setNumber(num + 1);

    }
    const decrease = () =>{
        setNumber(num-1);
    }

    return (
        <div>
            <button onClick={increase}>+1</button> 
            <button onClick={decrease}>-1</button>
            <p>{num}</p>
        </div>
    )
}
export default Counter;