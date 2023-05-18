import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Event from "./pages/01_Event";
import Event2 from "./pages/02_Event2";
import Hook from "./pages/03_Hook";
import UseEffect from "./pages/04_UseEffect";
import Component from "./pages/05_Component";
import Condition from "./pages/06_Condition";
import Map from "./pages/07_Map";
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
        <Link to="/map">Map</Link>| {" "}
      </nav>
      <Routes>
        <Route path="/event" element={<Event />} />
        <Route path="/event2" element={<Event2 />} />
        <Route path="/hook" element={<Hook />} />
        <Route path="/useEffect" element={<UseEffect />} />
        <Route path="/component" element={<Component />} />
        <Route path="/condition" element={<Condition />} />
        <Route path="/map" element={<Map />} />
      </Routes>
    </div>
  );
}

export default App;
