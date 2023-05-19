import React,{useState,useRef,useEffect} from 'react';

const UseRef = () => {
    const [count, setCount] = useState(0);
    const refCount = useRef(0);
    let variable = 0;

    console.log("렌더링!")

    const UpCountState = () =>{
        setCount(count+1)
    }
    const UpCountRef = () =>{
        refCount.current=refCount.current+1
        console.log("ref:",refCount.current)
    }
    const UpCountVar = () =>{
        variable= variable+1
        console.log("var",variable)
    }
    // 렌더링이 되는순간 ref값이 보임
    //ref는 수정되어도 렌더링이 안됨 .ref의 값은 컴퍼넌트가 마운드된시점부터 해제될때까지 같은값을 유지한다.
    //변수 variable은 렌더링이 되는순간 함수가 새로 호출되기때문에 함수내부 변수는 초기화된다

    const renderCount = useRef(0);
    useEffect( ()=>{
        renderCount.current=renderCount.current+1
        console.log("renderCount:",renderCount.current)

    })
    return (
        <div>
            State:{count}<br></br>
            Ref:{refCount.current}<br></br>
            Variable:{variable}

            <br></br>
            <button onClick={UpCountState}>State올려</button>
            <button onClick={UpCountRef}>Ref올려</button>
            <button onClick={UpCountVar}>Var올려</button>
            <hr></hr>
            렌더링수:{renderCount.current}


        </div>
    );
};

export default UseRef;