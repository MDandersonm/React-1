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

  //###############프로미스강의
  //resolve:성공했을때 실행되는 함수 , reject:실패했을때 실행되는함수
  //반환하는 프로미스객체는  state와 result를 속성으로갖는데
  //state는 처음에 pending(대기)였다가(result:undefined)
  //resolve(value)가 호출되면 fulfilled 가 되고 result:value 가된다
  //reject(error)가 호출되면 rejected가 되고  result는 error가 된다.

  const pr = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("OK");
    }, 3000);
  });
  //state:pending ,result: undefined 에서
  // 3초후 state: fulfilled, result:'OK' 로 된다.
  const pr2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error("error...."));
    }, 3000);
  });
  //state:pending ,result: undefined 에서
  // 3초후 state: rejected, result:error 로 된다.
  console.log("pr", pr);
  pr.then(
    //3초 후
    function (result) {
      console.log(result + " 가지러 가자");
    }, //이행되었을때 실행 result에는 OK값이 들어옴
    function (error) {
      console.log("다시 주문해주세요");
    } // 거부되었을때 실행 error에는 error값이 들어옴
  );
  //위 코드는 아래와 같이 변형이 가능하다.

  pr2
    .then(
      //3초 후
      function (result) {
        console.log(result + " 가지러 가자");
      }
    ) //이행되었을때 실행 result에는 OK값이 들어옴
    .catch(
      function (error) {
        console.log("다시 주문해주세요");
      } // 거부되었을때 실행 error에는 error값이 들어옴
    )
    .finally(function () {
      console.log("주문 끝 (항상실행합니다)");
    });

  const f1 = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("1번 주문 완료");
      }, 1000);
    });
  };
  const f2 = (message) => {
    return new Promise((resolve, reject) => {
      console.log(message);
      setTimeout(() => {
        resolve("2번 주문 완료");
      }, 3000);
    });
  };
  const f3 = (message) => {
    console.log(message);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("3번 주문 완료");
      }, 2000);
    });
  };

  //프로미스 체이닝
  // f1()
  //   .then((res) => f2(res))
  //   .then((res) => f3(res))
  //   .then((res) => console.log(res))
  //   .catch(console.log)
  //   .finally(() => {
  //     console.log("끝");
  //   });
  //

  //Promise.all 각 프로미스에 넘겨준값이 배열로 반환(모든작업이 완료될때까지 기달)
  //하나의 정보라도 누락되면 페이지를 안보여줌
  // Promise.all([f1(), f2(), f3()]).then((res) => {
  //   console.log(res);
  // });

  //Promise.race 하나라도 1등으로 완료되면 끝냄  1번이완료되면 2번부터 무시
  console.time("x");
  Promise.race([f1(), f2(), f3()]).then((res) => {
    console.log(res);
    console.timeEnd("x");
  });

  // ##async : 프로미스객체 반환.  그래서 then을 사용가능
  async function getName() {
    return "mike";
  }
  console.log(getName());
  getName().then((name) => {
    console.log("then(name)", name);
  });

  //## await
  function getName1(name) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(name);
      }, 1000);
    });
  }
  //await오른쪽 프로미스가 처리될떄까지 기다림
  async function showName() {
    const result = await getName1("Mike");
    console.log("시작", result); //1초후 마이크가 찍힘
  }
  showName();


    //프로미스 체이닝을 아래와 같이 바꿀수 있다.
  async function order() {
    const result1 = await f1();
    console.log("result1", result1)
    const result2 = await f2(result1);
    const result3 = await f3(result2);
    console.log("result3",result3);
    console.log("종료");
  }
  order();


  async function order2() {
    try{
      const result= await Promise.all([f1(), f2(), f3()]);
      console.log("order2", result);

    }catch(e){
      console.log(e)
    }

  }
  order2();





  return (
    <div>
      promise
    </div>
  );
};

export default AngMa_ECMA6;
