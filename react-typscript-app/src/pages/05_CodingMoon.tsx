import React from "react";

const CodingMoon = () => {
  interface User {
    email: string;
  }

  const liam1: User = { email: "asd@gnamil.com" };

  const liam2 = {} as User; //비추 컴파일시 에러가 안남

  //함수 ...rest있는경우
  type SumAllType = (a: number, ...rest: Array<number>) => number;
  const sumAll: SumAllType = (a, ...rest) => {
    return rest.reduce((acc, n) => acc + n, a);
  };

  //ex1) 함수타입
  interface User1 {
    userId: number;
    name: string;
    skills: string[];
  }
  type PrintUserFn = (user: User1) => string;
  const printUser: PrintUserFn = ({ userId, name, skills }): string => {
    return `${userId} ${name}  ${skills.join(" ")}`;
  };

  //예제)Object 메서드
  //방법1
  type MathFn = {
    add: (a: number, b: number) => number;
  };

  const mathObj: MathFn = {
    add(a, b) {
      //add함수에 직접적으로 type지정이 어렵다. 그래서 타입정의를 object형식으로 해준다.
      return a + b;
    },
  };

  //방법2
  type AddFn = (a: number, b: number) => number;
  const mathObj2: { add: AddFn } = {
    add(a, b) {
      //add함수에 직접적으로 type지정이 어렵다. 그래서 타입정의를 object형식으로 해준다.
      return a + b;
    },
  };

  //#############예제
  interface Config {
    appId: number;
    clientSecret: string;
    testUrl: string;
    updated: Date;
  }
  interface MenuConfig {
    appId: number;
    clientSecret: string;
  }

  // 다른 타입의 키타입을 참조해올때.
  type MecuConfigIndexed = {
    appId: Config["appId"];
    clientSecret: Config["clientSecret"];
  };
  //MAP TYPE   참조하고자하는대상P
  // [P in 속성] :P
  type MenuConfigMapped = {
    [k in "appId" | "clientSecret"]: Config[k];
  };


  const cfg: Config = {
    appId: 1001,
    clientSecret: "asbfadf",
    testUrl: "adsfsdfsd",
    updated: new Date(),
  };

  const menuCfg: MecuConfigIndexed = {
    appId: 1001,
    clientSecret: "asdrgrgo3",
  };
  const menuCfg2: MenuConfigMapped = {
    appId: 1001,
    clientSecret: "asdrgrgo3",
  };

   //#############예제
   type MenuConfigPick= Pick<Config, 'appId'|'clientSecret'>;
   

  return <div>dfd</div>;
};

export default CodingMoon;
