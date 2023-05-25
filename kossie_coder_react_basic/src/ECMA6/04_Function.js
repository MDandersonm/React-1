import React from "react";

const fcc = () => {
  //#1 일반함수
  function plus(a, b) {
    return a + b;
  }

  //#2 익명함수
  const minus = function (a, b) {
    return a - b;
  };
  //#3화살표함수
  const multiple = (a, b) => {
    return a * b;
  };

  //#4화살표함수 한줄일때 축약형 // 한줄이면 return 과 {  } 생략가능
  const multiple2 = (a, b) => a * b;

  //#5반환값이 객체인경우
  const arrow = (a, b) => {
    return { key1: a + b, key2: a - b };
  };
  //#6반환값이 객체인경우 축약형
  const arrow2 = (a, b) => ({ key1: a + b, key2: a - b });

  //#7 계단형
  function addNumber(num) {
    return function (value) {
      return num + value;
    };
  }
  //#8 계단형의 축약
  const addNumber2 = (num) => (value) => num + value;

  //this 와 화살표함수 bind(this)를 쓰는 이유

  function runAddThis2(func) {
   console.log( "!!",func(1, 2));
  }
  class Shape {}
  class Circle extends Shape {
    constructor(x, y, radius) {
      super(x, y);
      this.radius = radius;

      
      // var addThis2 = function (first, second) {
      //   return this.radius + first + second;
      // };
      // runAddThis2(addThis2);//에러 addThis2가 정의가될 시점의 this (Circle안의 this)가 실행될때 this(함수안의 this)랑 달라서그렇다
     
        //#방법 1
      // var addThis2 = function (first, second) {
      //   return this.radius + first + second;
      // }.bind(this);//함수가 선언이된 시점의 this를 그대로 전달하라는말
      // runAddThis2(addThis2)

       //#방법2
      //  var _this=this; //이렇게하면 함수를 전달할때도 이 지역변수값을 전달하게된다.
      //  var addThis2 = function (first, second) {
      //   return _this.radius + first + second;
      // }
      // runAddThis2(addThis2)

        //#방법3 화살표함수로하면 된다. this가 선언이된시점의 this를 자동적으로 전달함.
        var addThis2 =  (first, second) =>{
         return this.radius + first + second;
       }
       runAddThis2(addThis2)
    }
    area() {
      return this.radius * this.radius * Math.PI;
    }
  }
  const c = new Circle(0, 0, 10);

  //객체확장표현식

  let str1 = "other";
  let obj = {
    a: 1,
    ["G" + str1]: 2,
    [`A${str1}`]: 3,
    str1: 4,
    str2: 5,
    [str1]: 6,
  };
  console.log(obj);

  /*
JavaScript 객체에서 키를 정의할 때, 키가 유효한 식별자 문자열인 경우에는 따옴표를 생략할 수 있습니다. 
그래서 { key1: value1 }와 { 'key1': value1 }는 동일한 의미를 갖습니다. 
둘 다 key1라는 이름의 속성에 value1 값을 할당합니다.
그러나 동적 속성명을 사용하려면 대괄호 []를 사용해야 합니다.
즉, key1 변수에 저장된 값에 따라 속성명이 결정되어야 하는 경우 { [key1]: value1 }와 같이 작성해야 합니다.
이 경우 key1 변수의 값이 속성명이 됩니다.
  */

  return (
    <div>
      plus: {plus(2, 3)}
      <br></br>
      minus: {minus(2, 3)}
      <br></br>
      multiple: {multiple(2, 3)}
      <br></br>
      multiple2: {multiple2(3, 3)}
      <br></br>
      arrow: {JSON.stringify(arrow(4, 3))}
      <br></br>
      arrow2: {JSON.stringify(arrow2(4, 3))}
      <br></br>
      addNumber: {addNumber(4)(3)}
      <br></br>
      addNumber2: {addNumber2(45)(3)}
    </div>
  );
};

export default fcc;
