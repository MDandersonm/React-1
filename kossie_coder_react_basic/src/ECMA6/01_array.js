import React from "react";

const array = () => {
  let array1 = ["one", "two"];
  let array2 = ["three", "four"];
  // let first=array1[0]
  // let second=array2[1]
  // let [first,second]= [array1[0], array2[1]]
  let [first, second] = ["ara", "raa", "aa"];
  console.log(first, second);

  let object = { key1: "value1", key2: "value2" };
  console.log("object", object);
  console.log("JSON.stringify(object)", JSON.stringify(object)); // 메서드는 JavaScript 값이나 객체를 JSON 문자열로 변환합니다.
  let json1 = JSON.stringify(object);
  //JSON 문자열의 구문을 분석하고, 그 결과에서 JavaScript 값이나 객체를 생성합니다.
  console.log("JSON.parse(json1)", JSON.parse(json1));

  //   const {key1} = object;
  //   console.log("key1", key1);

  const { key1, key2 } = object;
  console.log("key1", key1);

  const { key1: myKey } = object;
  console.log("myKey", myKey);  //키 이름을 변경해서 추출하기.  key1을 myKey로 이름변경

  const { asd } = object;
  console.log("asd", asd);

  let object1 = { key3: "value3", key4: "value4" ,other:0 };
  let object2 = { key5: "value5", key6: "value6", other:-1, obj:object1 };
  let {obj: {key3}}= object2 //객체내부의 키를 가져오는 방법.
  console.log("key3", key3)


  const REQUEST = "REQUEST";
  console.log([REQUEST]);

  console.log({ ...object, key3: "value3" });
  console.log(...array1);
  console.log([...array1]);

  let array3 = ["one", "two", 3, 4, 5, 6, 7];

  let [aa, ...bb] = array3;
  console.log(aa);
  console.log(bb);

  function func1() {
    console.log(arguments);
  }
  func1(1, 2, 3); //객체형태로 출력

  function func2() {
    console.log(Array.prototype.slice.call(arguments));
  }
  func2(1, 2, 3); //배열형태로출력

  function func3(...args) {
    console.log(args);
  }
  func3(1, 2, 3); //배열형태로출력

  function func4(first, ...args) {
    console.log(first);
    console.log(args);
  }
  func4(1, 2, 3, 4); //배열형태로출력

  return <div></div>;
};

export default array;
