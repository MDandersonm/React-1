import React, { useEffect } from "react";

const Timer = (props) => {
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("타이머 돌아가는 중");
    }, 1000);

    return () => { // useEffect가 호출되기 직전이나 컴포넌트가 언마운트 될 때 호출됩니다.
      clearInterval(timer);
      console.log("타이머가 종료되었습니다.");
    };
  }, []);

  return (
    <div>
      <span>타이머를 시작합니다 콘솔을 보세요</span>
    </div>
  );
};

export default Timer;
