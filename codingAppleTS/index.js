var 이름 = "kim";
// 이름 =123;
var 배열 = ["123", "park"];
//name? : name이 들어올수도있고 안들어올수도있고
var 객체 = { name: "kim" };
var 이름2 = 123; //숫자 또는 string 가능
var 이름3 = 123;
//number가 들어와야되고 리턴타입도 number라는 뜻
function 함수(x) {
    return x * 2;
}
var john = [123, true];
var john2 = { name: "kmim" };
var john3 = { 123: "kmim", asd: "kim" };
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
    }
    return User;
}());
var project = {
    member: ["kim", "park"],
    days: 30,
    started: true,
};
var 회원들 = [1, "asd", 3];
// let 회원들2 :number|string[] =[1, 'asd',3] //이거아님
var user = "kim";
var age = undefined;
var married = false;
var 철수 = [user, age, married];
var 학교 = {
    score: [100, 97, 84],
    teacher: "Phil",
    friend: "John",
};
학교.score[4] = false;
학교.friend = ["Lee", 학교.teacher];
function 함수1(x) {
    //실수로 리턴해주는것을 막아줌.
    1 + 1;
}
function 함수2(x) {
    // x? 면 파라미터가 있을 수도 있고 없을 수도 있고
    1 + 1;
}
// 함수1()//에러
함수2();
function 함수3(x) {
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
function 자리수세기(x) {
    return x.toString().length;
}
console.log(자리수세기(443));
function 결혼가능확률(income, home, level) {
    var score = home ? 500 : 0;
    score += level === '상' ? 100 : 0;
    score += income;
    if (score >= 600)
        return "결혼가능";
}
console.log(결혼가능확률(700, false, '중'));
console.log(결혼가능확률(100, false, '상'));
