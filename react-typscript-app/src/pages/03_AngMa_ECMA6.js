import React, { useEffect } from "react";
/*

이 위치에 함수를 선언하면, 
해당 함수는 컴포넌트의 렌더링 사이클과 독립적으로 한 번만 생성됩니다.
다시 말해, 이위치에 선언한 함수는 렌더링 시마다 새롭게 생성되지 않습니다. 
이 함수는 AngMa_ECMA6 컴포넌트의 렌더링과 상태 변경에 상관없이 변하지 않는 함수입니다.
이는 렌더링 효율성 측면에서 유리할 수 있습니다.
반면, 함수형컴퍼넌트 내부 위치에 선언한 함수는 컴포넌트가 리렌더링될 때마다 새롭게 생성됩니다. 
이는 컴포넌트의 상태나 props에 의존하는 함수를 생성할 때 유용할 수 있지만, 
함수가 매번 새롭게 생성되므로 렌더링 효율성이 떨어질 수 있습니다.
따라서 함수를 선언하는 위치를 선택할 때는 그 함수의 용도와 컴포넌트의 렌더링 사이클을 고려해야 합니다
*/

console.log("여기에 선언하면 한번만 호출된다.");

const AngMa_ECMA6 = () => {
  console.log("여기에 선언하면 렌더링될때마다  호출된다.");

  ////############ Call에 대한 수업
  const mike = {
    name: "Mike",
  };
  const tom = {
    name: "Tom",
  };

  function showThisName() {
    console.log("this.name: ", this.name);
    //여기서 this는 window를 가리킴
  }
  showThisName.call(mike);
  //함수를 호출하면서 call을 사용하고 this로 사용할 객체를 넘기면
  //call() 메서드는 첫 번째 인자로 this 값으로 설정할 객체를 받고,
  //그 이후의 인자들은 호출하는 함수의 매개변수로 전달됩니다.
  //다시 말해, call() 메서드는 함수를 호출하면서 그 함수 내부에서의 this를 원하는 객체로 지정할 수 있게 합니다.
  //이렇게 하면 그 함수가 특정 객체의 메서드처럼 동작하도록 할 수 있습니다.

  function update(birthYear, occupation) {
    this.birthYear = birthYear;
    this.occupation = occupation;
  }
  update.call(mike, 1999, "singer");
  /*
   update 함수를 호출하면서 this를 mike로 설정하고, 
   그 다음 인자인 1999를 update 함수의 첫 번째 매개변수 birthYear로, 
   "singer"를 두 번째 매개변수 occupation으로 전달합니다.
  */
  console.log(mike);

  //#####apply는 //배열요소를 함수매개변수로 사용.
  update.apply(tom, [1999, "singer"]);
  console.log(tom);

  const nums = [3, 10, 1, 5, 7];
  const minNum = Math.min(...nums);
  console.log(minNum);

  const maxNum = Math.max.apply(null, nums); //두번째 매개변수 배열의 요소를 차례대로 인수로 사용
  console.log(maxNum);
  const maxNum2 = Math.max.call(null, ...nums); //call은 두번째매개변수를 배열이아닌풀어서 요소를 차례대로 인수로사용
  console.log(maxNum2);

  //######bind를 사용하면 this값을 바꿀수 있다.
  const updateMike = update.bind(mike); //bind의 인자로 우리가 원하는 객체를 넣으면 그 객체를 this로 활용한다.
  updateMike(1980, "police");
  console.log(mike);

  //##실제 사용 예제
  const user = {
    name: "kims",
    showName: function () {
      console.log(`hello,${this.name}`);
    },
  };
  user.showName(); //잘 나옴 메서드는 .앞에 있는게 this

  let fn = user.showName; // fn에 할당할떄 this를 잃어버림
  // fn();//에러
  fn.call(user);
  fn.call(user);
  let boundFn = fn.bind(user);
  boundFn();

  //################별코딩this강의--------------------
  //this는 함수를 호출한 객체이다
  console.log(this);

  function main() {
    console.log(this);
  }
  main();
  console.log(window);
  // window.main();

  //함수를 돔요소의 이벤트처리기로 사용하면 에서 this는 이벤트를 발사한요소를 의미

  useEffect(() => {
    const button = document.getElementById("btn");
    console.log(button);
    button.addEventListener("click", function (event) {
      console.log(event.target === this);
      console.log("this", this);
    });
  }, []);
  //useEffect를 사용하지않는다면 문제가 에러가생긴다.
  //document.getElementById('btn') 호출 시점에 button 요소가 아직 DOM에 존재하지 않아서 발생하는 것입니다.
  const handleClick = (event) => {
    console.log(event.target === event.currentTarget);
    console.log("this", this); //이렇게하면  undefined
  };


  //############객체 메소드 ,계산된 프로퍼티 강의
  let a='age';
  const user2={
    name:'Mike',
    [a]:30, //computed property
    [1+4]:5,  //이렇게 계산식을 넣어도 키로 만들어줌
    ["안녕"+"하세요"]:"Hello"

  }

  //Object.assign() //객체 복제 {gender:'male'} 이건 초기값 여기에 user2추가.
  const newUser= Object.assign({gender:'male'},user2);
  console.log(newUser)
  console.log("json",JSON.stringify(newUser))

  //Object.keys() //키를 배열로 반환
  const newUser1 = Object.keys(user2);
  console.log(newUser1)


  //Object.values() //value만 배열로 반환
  const newUser2 = Object.values(user2);
  console.log(newUser2)
  //Object.entries() //키와값을 모두 배열로반환
  const newUser3 = Object.entries(user2);// [[key,value],[],[] ]
  console.log(newUser3)
  //Object.fromEntries() [키,값]배열을 객체로
  const arr = [["name", "mike"],["age", 30], ["gender", "male"]];
  const newUser4= Object.fromEntries(arr)
  console.log("newUser4" ,newUser4)



  return (
    <div>
      <button id="btn">버튼</button>
      <button id="btn2" onClick={handleClick}>
        버튼
      </button>
    </div>
  );
};

export default AngMa_ECMA6;
