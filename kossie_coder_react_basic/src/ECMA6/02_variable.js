import React from "react";

const fcc = () => {
  //############# push대신에 concat을 사용
  const arr = [];
  // arr.push(1,2,3) // 이렇게하면 arr자체가 변한다.
  const arr2 = arr.concat(1, 2, 3);

  console.log("arr", arr); //기존배열은 유지됨
  console.log("arr2", arr2); //새로운배열로 복사

  // let arr2=[];
  // arr2.concat([1,2,3])
  // console.log("arr2",arr2)

  //########  shift 대신 slice(1)사용
  const arr3 = [0, 1, 2, 3, 4];
  console.log("arr3", arr3);
  // arr3.shift()//변경저장되는 문제가 있다.
  // console.log('arr3 쉬프트 후 ',arr3)

  console.log("arr3.slice(0,2)", arr3.slice(0, 2));

  console.log("arr3.slice(1)", arr3.slice(1));
  const arr4 = arr3.slice(1);
  console.log("arr4", arr4);
  console.log("arr3", arr3); //arr3은 변함이없다.

  //#pop대신 slice(0,len-1) 을 사용
  const arr5 =[0,1,2,3,4,5];
  // arr5.pop()  //마지막요소가 삭제되어 저장되는 문제가있다.
  // console.log("arr5",arr5)
  const len= arr5.length
  const arr6= arr5.slice(0,len-1)
  const arr7= arr5.slice(0,-1)//이렇게 해도 된다.
  console.log("arr7",arr7)
  console.log("arr6",arr6)
  console.log("arr5",arr5)//arr5원본배열은 변함이없다.


  //####### splice(s,c,..items)대신 slice(0,s).concat(...items,slice(s+c)) 사용
  const arr8=[0,1,2,3,4,5];

  // arr8.splice(1,0, 0.3, 0.4) // 1번자리에 0.3 0.4 삽입
  // console.log("arr8",arr8)

  const arr9=  arr8.slice(0,1).concat(0.3,0.4, ...arr8.slice(1))
  console.log("arr9",arr9)

  //###############객체의경우
  const obj={a:1,b:2};
  //객체의 키값이 변경이 가능한데, 그렇게하지말고
  const obj2 ={...obj , a:3}//이렇게 변경 (뒤에선언된것이 앞의 전개연산자의 값을 덮어씌우므로)
  console.log(obj2)
  console.log(obj)


  return <div></div>;
};

export default fcc;
