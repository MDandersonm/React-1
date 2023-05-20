import React, { useEffect, useState, useMemo } from "react";

const UseMemo2 = () => {
  useEffect(() => {
    console.log("리렌더링 useEffect호출");
  });

  const [Number, setNumber] = useState(0);
  const [isKorea, setIsKorea] = useState(true);

  // const location = {
  //   country: isKorea ? "한국" : "외국",
  // };

   //이렇게하면 Number를 변경해도 location useEffect호출이된다.
  //number가 바뀌면 함수 컴퍼넌트가 다시 호출되는데
  //그때 새로생긴 객체{ } 는 호출될때마다  생성되서 다른 메모리상 공간에 저장되고
  //location이라는 변수는 이 생성된 객체의 주소를 참조함
  //그래서 함수컴퍼넌트가 호출될때마다 location이라는 변수의 주소는 계속 바뀜
  // 그래서 location이 변경되었다고 인식하여 useEffect가 호출되는것

  const location = useMemo(() => {
    return { country: isKorea ? "한국" : "외국" };
  }, [isKorea]);

  useEffect(() => {
    console.log("location useEffect호출(오래걸리는작업) ");
    
  }, [location]);
  return (
    <div>
      <h3>하루에 몇끼 먹어요?</h3>
      <input
        type="number"
        value={Number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      ></input>
      <span>{Number}끼</span>

      <hr></hr>

      <h3>어느 나라에 있어요?</h3>
      <span>나라: {location.country}</span>
      <br></br>
      <button onClick={() => setIsKorea(!isKorea)}>비행기 타자</button>
    </div>
  );
};

export default UseMemo2;
