import React from "react";

const fcc = () => {
  //####기본상황
  function parse1(qs) {
    const qs1 = qs.substr(1);
    // const qs1= qs.slice(1);//banana=10&apple=20&orange=30
    console.log("qs1", qs1);
    const arr1 = qs1.split("&"); //['banana=10', 'apple=20', 'orange=30']
    console.log("arr1", arr1);

    const result = {};
    for (let i = 0; i < arr1.length; i++) {
      const arr2 = arr1[i].split("="); //['banana','10']
      const key = arr2[0];
      const value = Number.isNaN(Number(arr2[1])) ? arr2[1] : Number(arr2[1]);
      result[key] = value;
    }
    return result;
  }

  ///### ForEach적용, 구조분해할당표현식 사용

  function parse2(qs) {
    const qs1 = qs.substr(1);
    // const qs1= qs.slice(1);//banana=10&apple=20&orange=30
    console.log("qs1", qs1);
    const arr1 = qs1.split("&"); //['banana=10', 'apple=20', 'orange=30']
    console.log("arr1", arr1);

    const result = {};

    arr1.forEach((element, index) => {
      const [key, value1] = element.split("="); //['banana','10']
      result[key] = Number.isNaN(Number(value1)) ? value1 : Number(value1);
    });

    return result;
  }

  ///# Map함수 적용 ,
  function parse3(qs) {
    const qs1 = qs.substr(1);
    // const qs1= qs.slice(1);//banana=10&apple=20&orange=30
    console.log("qs1", qs1);
    const arr1 = qs1.split("&"); //['banana=10', 'apple=20', 'orange=30']
    console.log("arr1", arr1);

    let result = arr1.map((element, index) => {
      let [key, value1] = element.split("="); //['banana','10']
      return { [key]: Number.isNaN(Number(value1)) ? value1 : Number(value1) };
      // return { key: Number.isNaN(Number(value1)) ? value1 : Number(value1) };
      //위와 같이하면 안된다.
      /*
key1이라는 이름의 속성이 객체에 할당되어 있습니다. 
이 경우, key1은 동적인 속성명이 아니라 문자열 'key1' 그대로의 속성명으로 인식되기 때문에, 
원하시는 결과를 얻지 못하고 있습니다.
이를 수정하려면 대괄호([])를 사용하여 key1을 동적인 속성명으로 설정해야 합니다
      */
    });

    return result;
    //element각각이 객체가되는 배열이 반환된다  배열->배열 로 변경되는게 map
  }

  ///# Reduce함수 적용 ,
  function parse4(qs) {
    const qs1 = qs.substr(1);
    console.log("qs1", qs1);
    const arr1 = qs1.split("&"); //['banana=10', 'apple=20', 'orange=30']
    console.log("arr1", arr1);

    let result = arr1.map((element, index) => {
      let [key, value1] = element.split("="); //['banana','10']
      return { [key]: Number.isNaN(Number(value1)) ? value1 : Number(value1) };
    });
    console.log("result", result);
    //[{banana: 10} , ...]
    let result2 = result.reduce((total, element, index) => {
      // {banana: 10}
      console.log("element", element);
      console.log("Object.entries(element)", Object.entries(element));
      let [[key, value]] = Object.entries(element);
      total[key] = value;

      /*
element는 단일 속성을 가진 객체이며 그 속성의 키는 동적입니다. 
그래서 element.key와 element.value는 undefined를 반환합니다.
각 요소(element)의 key와 value를 얻는 방법 중 하나는 Object.entries() 함수를 사용하는 것입니다.
이 함수는 객체의 키-값 쌍을 배열로 반환합니다.*/
      //아래처럼 하면 안된다.
      // console.log("element.key", element.key);
      // console.log("element.value", element.value);
      // total[element.key] = element.value;
      return total;
    }, {});

    return result2;
    //배열에 객체로 변환된다  배열에서 딴걸로 로 변경되는게 reduce
  }

  ///# ###  배열함수  연결 , 객체추출식 사용
  function parse5(qs) {
    const qs1 = qs.substr(1);
    console.log("qs1", qs1);
    const arr1 = qs1.split("&"); //['banana=10', 'apple=20', 'orange=30']
    console.log("arr1", arr1);

    let result = arr1
      .map((element, index) => {
        let [key, value1] = element.split("="); //['banana','10']
        return {
          [key]: Number.isNaN(Number(value1)) ? value1 : Number(value1),
        };
      })
      //아래처럼하면 안된다.
      /*
여기서 각 객체는 한 개의 속성만을 가지고 있으며 이 속성의 이름은 동적입니다. 
따라서 key와 value라는 이름으로 해당 속성을 구조 분해할 수 없습니다.
*/
      // .reduce((total, { key, value }, index) => {
      //   total[key] = value;

      .reduce((total, obj, index) => {
        const [key, value] = Object.entries(obj)[0];
        total[key] = value;
        return total;
      }, {});
    return result;
  }

  const qs = "?banana=10&apple=20&orange=30";
  //  { bnana: 10, apple: 20, orange: 30 };

  console.log("result!!", parse5(qs));

  return <div>ss</div>;
};

export default fcc;
