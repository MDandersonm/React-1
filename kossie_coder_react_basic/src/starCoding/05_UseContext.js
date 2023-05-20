import React, { useContext, useState } from "react";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import { ThemeContext } from "./context/ThemeContext";

const UseContext = () => {
  const [mode, setMode] = useState(false);
  const mode2 = useContext(ThemeContext);
  console.log(mode2);

  return (
    <div>
      <ThemeContext.Provider value={ {mode,setMode}}>
        <Header mode={mode}></Header>
        <Content mode={mode}></Content>
        
        {/* props사용 */}
        {/* <Footer mode={mode} setMode={setMode}></Footer> */}

        {/* useContext사용 */}
        <Footer></Footer> 
        
      </ThemeContext.Provider>
    </div>
  );
};

export default UseContext;
