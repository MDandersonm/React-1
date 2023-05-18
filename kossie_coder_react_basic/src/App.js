import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Event from "./pages/Event";
import Event2 from "./pages/Event2";
import Hook from "./pages/Hook";
import UseEffect from "./pages/UseEffect";
import Component from "./pages/Component";
import Condition from "./pages/Condition";
function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/event">Event</Link> | {" "}
        <Link to="/event2">Event2</Link> | {" "}
        <Link to="/hook">Hook</Link>| {" "}
        <Link to="/useEffect">UseEffect</Link>| {" "}
        <Link to="/component">Component</Link>| {" "}
        <Link to="/condition">Condition</Link>| {" "}
      </nav>
      <Routes>
        <Route path="/event" element={<Event />} />
        <Route path="/event2" element={<Event2 />} />
        <Route path="/hook" element={<Hook />} />
        <Route path="/useEffect" element={<UseEffect />} />
        <Route path="/component" element={<Component />} />
        <Route path="/condition" element={<Condition />} />
      </Routes>
    </div>
  );
}

export default App;
