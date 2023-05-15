import React from "react";
import {Routes, Route, Link}from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"

function App() {
  return (
    // html태그처럼보이는 xml임. class= 라고하면 안됨.
    <div className="App">
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link>
     </nav>
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
     </Routes>
    </div>
  );
}

export default App;
