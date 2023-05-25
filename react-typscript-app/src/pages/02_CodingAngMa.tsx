import React from "react";

const CodingAngMa: React.FC = () => {
  let a1: number[] = [1, 2, 3];
  let a2: Array<number> = [1, 2, 3];

  //튜플
  let b: [string, number] = ["z", 1];

  //never :항상에러를 반환하거나 무한루프로 끝나지않을때.
  function showError(): never {
    throw new Error();
  }

  function infLoop(): never {
    while (true) {
      // do something...
    }
  }

  //enum
  enum Os {
    Window = 3,
    Ios = 10,
    Android,
    Java = "java1",
  }
  //양방향맵핑
  console.log(Os[3]); // Window
  console.log(Os[11]); // Android
  console.log(Os["Ios"]); //10

  //단방향맵핑
  console.log(Os["Java"]); //java1

  let myOs: Os; //Window Ios Android Java 만 입력할수있게 강제하고싶을떄 이렇게 지정
  myOs = Os.Window;

  //null, undefined
  let c: null = null;
  let d: undefined = undefined;

  //##########속성값을 정의해서 객체로 표현할때는 인터페이스 사용
  interface User {
    name: string;
    age: number;
    gender?: string; //있어도되고 없어도되고
    readonly brithYear: number; //readonly를 쓰면 수정할수없음
    [grade: number]: Score; //number를 키로하고 Score을 밸류로 받는 속성을 여러개 만들수있음
  }
  type Score = "A" | "B" | "C" | "F";

  let user: User = {
    name: "xx",
    age: 30,
    brithYear: 1992,
    1: "A",
    2: "B",
  };
  // user.brithYear=1990;  //readonly를 쓰면 수정할수없음
  console.log(user.brithYear);

  //인터페이스로 함수 정의하기
  interface Add {
    (num1: number, num2: number): number;
  }
  const add: Add = function (x, y) {
    return x + y;
  };

  add(10, 20);

  //implements의 활용
  interface Car {
    color: string;
    wheels: number;
    start(): void;
  }

  class BMW implements Car {
    // color='red';
    color;
    constructor(c: string) {
      this.color = c;
    }
    wheels = 4;
    start() {
      console.log("go...");
    }
  }
  const bb = new BMW("green");

  console.log(bb);

  //함수
  function add2(...nums: number[]) {
    //...nums는 배열임
    return nums.reduce((result, num) => result + num, 0);
  }

  // this의 타입설정
  interface User1 {
    name: string;
  }

  const Sam: User1 = { name: "Sam" };
  function showName(this: User1, age: number) {
    console.log(this.name, age);
  }

  const a = showName.bind(Sam);
  a(30);

  ////함수오버로드는 전달받은 매개변수개수나 타입에따라 다른 동작을 하게함

  interface User2 {
    name: string;
    age: number;
  }
  function join(name: string, age: number): User2; //이렇게 오버로드
  function join(name: string, age: string): string; //이렇게 오버로드
  function join(name: string, age: number | string): User2 | string {
    if (typeof age === "number") {
      return {
        name,
        age,
      };
    } else {
      return "나이는 숫자로 입력해주세요";
    }
  }

  const sam: User2 = join("Sam", 30);
  const jane: string = join("Jane", "30");

  //intersection type 교차타입은 여러개의 타입을 하나로 합쳐줌

  interface Car1 {
    name: string;
    start(): void;
  }
  interface Toy1 {
    name: string;
    color: string;
    price: number;
  }
  const toyCar: Toy1 & Car1 = {
    name: "타요",
    start() {},
    color: "blue",
    price: 1000,
  };

  // ######## 클래스
  class Car2 {
    //color:string;// #방법1 멤버변수를 미리 타입과 함께 설정해야한다.
    // constructor(color:string){
    constructor(public color: string) {
      //#방법2 멤버변수를 안만들거면 public 또는 readonly를 적어주면된다.
      this.color = color;
    }
    start() {
      console.log("start");
    }
  }
  const bmw2 = new Car2("red");

  //##########제네릭
  function getSize<T>(arr: T[]): number {
    return arr.length;
  }
  const arr1 = [1, 2, 3];
  getSize<number>(arr1); //T가 number로 적용됨.

  //##########제네릭2
  interface Mobile<T> {
    name: string;
    option: T;
  }
  // const m1:Mobile<object>={
  const m1: Mobile<{ color: string; coupon: boolean }> = {
    name: "s21",
    option: {
      color: "red",
      coupon: false,
    },
  };
  const m2: Mobile<string> = {
    name: "s21",
    option: "good",
  };
  //######제네릭3

  interface User3 {
    name: string;
  }
  interface Book {
    price: number;
  }
  const user3: User3 = { name: "ara" };
  const book: Book = { price: 3000 };
  //어떤 T타입이올건데 그것은 name 이 스트링인것을 확장한 형태이다 라는 말.
  function showName1<T extends { name: string }>(data: T): string {
    return data.name;
  }

  showName1(user3);
  //showName1(book);//네임이없거나 스트링이 아니라면 에러가뜸

  //######keyof
  interface User4 {
    id: number;
    name: string;
    age: number;
    gender: "m" | "f";
  }
  type UserKey = keyof User4; //유저인터페이스의 키값을 유니온 형태로 받을수 있다  = 'id'| 'name' | 'age' |'gender
  const uk: UserKey = "gender";

  //#########partial<T> partial은 속성을 모두 옵션으로 바꿔줌
  // interface User4 {
  //   id?: number;
  //   name?: string;
  //   age?: number;
  //   gender?: "m" | "f";
  // }
  //위와 같은 얘기
  let admin: Partial<User4> = {
    id: 1,
    name: "Bob",
  };

  //#########Required<T> Required는 모든 속성을 모두 필수로 바꿔줌
  interface User5 {
    id: number;
    name: string;
    age?: number;
    gender: "m" | "f";
  }

  let admin2: Required<User5> = {
    id: 1,
    age: 50, //age도 필수로 된다.
    name: "Bob",
    gender: "m",
  };

  //######### Record<K,T>
  interface Score2 {
    "1": "A" | "B" | "C" | "D";
    "2": "A" | "B" | "C" | "D";
    "3": "A" | "B" | "C" | "D";
    "4": "A" | "B" | "C" | "D";
  }

  const score1: Score2 = {
    1: "A",
    2: "C",
    3: "D",
    4: "A",
  };
  type Grade = "1" | "2" | "3" | "4";
  type Score0 = "A" | "B" | "C" | "D";
  const score2: Record<Grade, Score0> = {
    //Record<key부분 , type부분> 이렇게 적어주면됨.
    1: "A",
    2: "C",
    3: "D",
    4: "A",
  };

  //  //######### Record<K,T>

  interface User6 {
    id: number;
    name: string;
    age: number;
  }
  function isValid(user: User6) {
    const result: Record<keyof User6, boolean> = {
      id: user.id > 0,
      name: user.name !== "",
      age: user.age > 0,
    };
    return result;
  }

  //  //######### Pick<T,K>

  const admin3: Pick<User6, "id" | "name"> = {
    id: 0,
    name: "kims",
  };
  //  //######### Omit<T,K> 프로퍼티를 제거
  const admin4: Omit<User6, "age" | "gender"> = {
    id: 0,
    name: "kims",
  };

  //  //######### Exclude<T1,T2> T1에서 T2를 제외하고 사용
  type T1 = string | number | boolean;
  type T2 = Exclude<T1, number | boolean>; //string만 남음


  //  //######### NonNullable<Type>    null,undefined을 제외한 타입을 생성 
  type T3 =string|null|undefined |void;
  type T4 = NonNullable<T3> //string과 void만 남음
  
  return <div>dd</div>;
};

export default CodingAngMa;
