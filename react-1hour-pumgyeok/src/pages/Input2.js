import React, {useState} from 'react';
//여러개의 데이터를 한번에 처리할때
const Fcaa = () =>{
    const [inputs, setInputs] = useState({
        name: "",
        email:"",
        tel:"",
    })
    
const {name,email,tel}= inputs;//오브젝트안에있는것을 빼오는방법
    
const onChange= (e)=>{
    const value = e.target.value;
    const id= e.target.id;
    // inputs[id]= value; //이렇게 하는건 상태관리가안됨. 자바스크립트에서는 object,배열은 heap메모리에 관리됨 
    //heap메모리 블럭 값을 직접바꾸면 리액트에서는 변경되었다는걸 알지못함.

    //깊은복사를 한다.
    setInputs({
        ...inputs,
        // name: "",
        // email:"",
        // tel:"",
        [id]:value
    })
}

    return (
        <div>
            <div>
                <label>이름</label>
                <input type="text" id="name" value={name} onChange={onChange}></input>
            </div>
            <div>
                <label>이메일</label>
                <input type="email" id="email" value={email} onChange={onChange}></input>
            </div>
            <div>
                <label>전화번호</label>
                <input type="tel" id="tel" value={tel} onChange={onChange}></input>
            </div>
            <p>이름: {name} </p>
            <p>이메일: {email} </p>
            <p>전화번호: {tel} </p>
        </div>
        
    )
}
export default Fcaa;