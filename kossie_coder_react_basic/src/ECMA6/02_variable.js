import React from "react";
import _ from "lodash";
const fcc = () => {
  //############# push대신에 concat을 사용
  const arr = [];
  // arr.push(1,2,3) // 이렇게하면 arr자체가 변한다.
  const arr2 = arr.concat(1, 2, 3);

  console.log("arr", arr); //기존배열은 유지됨
  console.log("arr2", arr2); //새로운배열로 복사
  const arr22 = arr.concat([1, 2, 3]);
  console.log("arr22", arr22);
  arr22.push(99);
  console.log("arr22", arr22);
  console.log("arr", arr);

  const arr33 = [].concat(arr22);
  console.log("arr33", arr33);
  arr33[1] = 100;
  console.log("arr33", arr33);
  console.log("arr22", arr22);
  /*
본 배열과 복사된 배열의 원시 값(숫자, 문자열, 불리언 등)은 서로 독립적인 메모리 공간에 저장됩니다. 
따라서 이 경우에는 원본 배열에는 영향을 주지 않습니다.
다만 이러한 원시 값이 아닌 객체나 배열 등의 참조 값이 배열에 포함되어 있을 경우,
복사된 배열에서 해당 참조 값을 변경하면 원본 배열에도 영향을 미치게 됩니다. 
이를 '얕은 복사'라고 부릅니다.

반면에 '깊은 복사'는 원본 배열의 원시 값 뿐만 아니라 참조 값도 전부 새로운 메모리 공간에 복사하기 때문에 
복사된 배열에서 어떠한 변경을 해도 원본 배열에는 영향을 주지 않습니다.
*/
  //얕은복사  배열.slice() , Array.from(originalArray);, [...originalArray];
  let originalArray = [1, 2, { a: 1 }];
  let shallowCopiedArray = [].concat(originalArray);

  shallowCopiedArray[2].a = 99;
  console.log("originalArray", originalArray); // [1, 2, { a: 99 }] 변경된 것을 볼 수 있습니다.

  //깊은복사 방법1 JSON.parse(JSON.stringify(originalArray1));
  let originalArray1 = [{ a: 1 }, { b: 2 }, 4, "naga"];
  let deepCopiedArray1 = JSON.parse(JSON.stringify(originalArray1));
  deepCopiedArray1[1].b = 99;
  deepCopiedArray1[2] = 44;
  deepCopiedArray1[3] = "gajima";
  console.log("originalArray1", originalArray1);
  console.log("deepCopiedArray1", deepCopiedArray1);

  //깊은복사 방법2 originalArray2.map((a) => Object.assign({}, a))
  //(이 방법은 복잡한 객체나 중첩된 배열에 대해서는 올바르게 동작하지 않습니다.)
  let originalArray2 = [{ a: 1 }, { b: 2 }, 4, "naga"];
  let deepCopiedArray2 = originalArray2.map((a) => Object.assign({}, a));
  deepCopiedArray2[1].b = 99;
  deepCopiedArray2[2] = 44;
  deepCopiedArray2[3] = "gajima";
  console.log("originalArray2", originalArray2);
  console.log("deepCopiedArray2", deepCopiedArray2);

  //#########주의
  let originalObject = { a: { b: 1 }, c: 2 };

  // 얕은 복사(shallow copy)를 수행합니다.
  let copiedObject = Object.assign({}, originalObject);

  // copiedObject의 속성을 변경하면 원본 객체에도 영향을 미칩니다.
  copiedObject.a.b = 99;

  console.log("originalObject", originalObject); // { a: { b: 99 }, c: 2 }
  console.log("copiedObject", copiedObject); // { a: { b: 99 }, c: 2 }

  //# lodash라이브러리 사용하여 깊은복사하기. 복잡한객체나 중첩된배열도 성공
  let originalArray3 = [{ a: 1 }, { b: 2 }, 4, "naga"];
  let deepCopiedArray3 = _.cloneDeep(originalArray3);
  deepCopiedArray3[1].b = 99;
  deepCopiedArray3[2] = 44;
  deepCopiedArray3[3] = "gajima";
  console.log("originalArray3", originalArray3);
  console.log("deepCopiedArray3", deepCopiedArray3);

  let originalObject2 = { a: { b: 1 }, c: 2 };
  let copiedObject2 = _.cloneDeep(originalObject2);
  copiedObject2.a.b = 99;

  console.log("originalObject2", originalObject2); //제대로된다
  console.log("copiedObject2", copiedObject2);

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
  const arr5 = [0, 1, 2, 3, 4, 5];
  // arr5.pop()  //마지막요소가 삭제되어 저장되는 문제가있다.
  // console.log("arr5",arr5)
  const len = arr5.length;
  const arr6 = arr5.slice(0, len - 1);
  const arr7 = arr5.slice(0, -1); //이렇게 해도 된다.
  console.log("arr7", arr7);
  console.log("arr6", arr6);
  console.log("arr5", arr5); //arr5원본배열은 변함이없다.

  //####### splice(s,c,..items)대신 slice(0,s).concat(...items,slice(s+c)) 사용
  const arr8 = [0, 1, 2, 3, 4, 5];

  // arr8.splice(1,0, 0.3, 0.4) // 1번자리에 0.3 0.4 삽입
  // console.log("arr8",arr8)

  const arr9 = arr8.slice(0, 1).concat(0.3, 0.4, ...arr8.slice(1));
  console.log("arr9", arr9);

  //###############객체의경우
  const obj = { a: 1, b: 2 };
  //객체의 키값이 변경이 가능한데, 그렇게하지말고
  const obj2 = { ...obj, a: 3 }; //이렇게 변경 (뒤에선언된것이 앞의 전개연산자의 값을 덮어씌우므로)
  console.log(obj2);
  console.log(obj);

  return <div></div>;
};

export default fcc;
