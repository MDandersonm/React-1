import React,{useRef,useEffect} from 'react';

const UseRefFocus = () => {
    const refFocus= useRef();
    console.log(refFocus)

    useEffect( ()=>{
        refFocus.current.focus();
    })

const login= () =>{
    alert( `환영합니다. ${refFocus.current.value} 님! `)
    refFocus.current.focus();
}


    return (
        <div>
            <input ref={refFocus} type="text" placeholder='userName'></input>
            <button onClick={login}>로그인</button>
        </div>
    );
};

export default UseRefFocus;