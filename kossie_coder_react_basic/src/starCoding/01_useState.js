import React,{useState} from 'react';

const Fcc = () => {
    const [name,setName]= useState('');
    // const [names,setNames]= useState(['홍길동','김민수']);
    const heavyWork =() =>{//이걸 가장처음 렌더링될때만 불려져야한다.
        console.log("엄청무거운작업")
        return ['홍길동','김민수']
    }

    // const [names,setNames]= useState(heavyWork());//이러면 렌더링될때마다 heavyWork를 실행함
    const [names,setNames]= useState(()=>{return heavyWork()});
    //초기값을 가져올떄 값을 넣어주는게 아니라 콜백함수로 넣어주면
    //맨 처음 화면이 렌더링될때만 함수가 불려지게 된다.


    const add = ()=>{
        // setNames([...names,name])//비추
        setNames((prev => {
            return([...prev,name])
        }))
        setName('');

    }
    const onChange = (e)=>{
        setName(e.target.value)
    }
    console.log("렌더링!")
    //타자를 칠때마다 렌더링이 되는 이유는 setName이 작동해서 state가 변경되기 때문이다.


    return (
        <div>
            <input type="text" value={name} onChange={onChange}></input>
            <button onClick={add}>Upload</button>

            {name}
            <hr/>
            {names.map( (name,index)=>{
                return <div key={index}>{name}</div>
            })}
        </div>
    );
};

export default Fcc;