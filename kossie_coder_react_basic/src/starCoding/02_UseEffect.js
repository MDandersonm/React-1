import React,{useState, useEffect} from 'react';
import Timer from './components/Timer';
const UseEffect = () => {
    const [timer,setTimer]= useState(false)
    return (
        <div>
            {/* timer가 트루일때만 Timer를 보여줌 */}
            {timer && <Timer></Timer>}
            
            <button onClick={()=> setTimer(!timer)}>Timer</button>
            
        </div>
    );
};

export default UseEffect;