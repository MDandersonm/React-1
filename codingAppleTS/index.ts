let 이름: string = "kim";
// 이름 =123;

let 배열: string[] = ["123", "park"];

//name? : name이 들어올수도있고 안들어올수도있고
let 객체: { name?: string } = { name: "kim" };

let 이름2: string | number = 123; //숫자 또는 string 가능

type MyType = string | number;

let 이름3: MyType = 123;

//number가 들어와야되고 리턴타입도 number라는 뜻
function 함수(x: number): number {
  return x * 2;
}

//첫번째꺼는 number 두번째거는 boolean 이렇게 딱 2개만 들어와야함
type Member = [number, boolean];
let john: Member = [123, true];

//키는 name만 가져야하고 문자열이어야한다.
type Member2 = {
  name: string;
};
let john2: Member2 = { name: "kmim" };

//모든 key들은 문자를가져야하고 밸류로 string을 가져야한다.
type Member3 = {
  [key: string]: string;
};
let john3: Member3 = { 123: "kmim", asd: "kim"};

//JavaScript에서는 객체의 키가 사실상 항상 문자열입니다.
//숫자로 키를 정의하더라도 내부적으로 문자열로 변환됩니다.
// TypeScript는 이 사실을 알고 있으며, 
//따라서 문자열 인덱스 시그니처 [key: string]: string;이 숫자 키를 허용합니다.

class User {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

let project: { member: string[]; days: number; started: boolean } = {
  member: ["kim", "park"],
  days: 30,
  started: true,
};

let 회원들: (number | string)[] = [1, "asd", 3];
// let 회원들2 :number|string[] =[1, 'asd',3] //이거아님

let user: string = "kim";
let age: undefined | number = undefined;
let married: boolean = false;
let 철수: (string | number | undefined | boolean)[] = [user, age, married];

let 학교: {
  score: (number | boolean)[];
  teacher: string;
  friend: string | string[];
} = {
  score: [100, 97, 84],
  teacher: "Phil",
  friend: "John",
};
학교.score[4] = false;
학교.friend = ["Lee", 학교.teacher];

function 함수1(x: number): void {
  //실수로 리턴해주는것을 막아줌.
  1 + 1;
}

function 함수2(x?: number): void {
  // x? 면 파라미터가 있을 수도 있고 없을 수도 있고
  1 + 1;
}
// 함수1()//에러
함수2();

function 함수3(x: number | undefined): void {
  // x? 대신에  |undefined 를 써도 된다.
  1 + 1;
}

// 안되는데?
// function 이름출력(name: string | undefined): string {
//     console.log("name",name)
//     if (name===undefined){
//         return "이름이없습니다."
//     }
//     return "안녕하세요" + name;
// }

// console.log( 이름출력())

//에러나잖아?
// function 함수4(x: number | undefined): void{
//     console.log(x)
// }
// console.log(함수4());

function 자리수세기(x: number|string):number{

    return x.toString().length
    
}
console.log(자리수세기(443))

function 결혼가능확률(income:number,home:boolean, level:string):string|void{
    let score= home ? 500 : 0;
    score += level==='상' ? 100:0;
    score += income;
    if(score>=600) return "결혼가능"

}

console.log(결혼가능확률(700,false,'중'))
console.log(결혼가능확률(100,false,'상'))