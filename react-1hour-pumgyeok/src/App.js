import React from "react";
import {Routes, Route, Link}from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Counter from "./pages/Counter"
import Input from "./pages/Input"
function App() {
  return (
    // html태그처럼보이는 xml임. class= 라고하면 안됨.
    <div className="App">
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link> |{" "}
        <Link to="/counter">Counter</Link>|{" "}
        <Link to="/input">Input</Link>
        

     </nav>
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/counter" element={<Counter />} />
      <Route path="/input" element={<Input />} />
     </Routes>
    </div>
  );
}

export default App;
