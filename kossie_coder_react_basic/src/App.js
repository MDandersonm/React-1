import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Event from "./pages/01_Event";
import Event2 from "./pages/02_Event2";
import Hook from "./pages/03_Hook";
import UseEffect from "./pages/04_UseEffect";
import Component from "./pages/05_Component";
import Condition from "./pages/06_Condition";
import Map from "./pages/07_Map";
import Map2 from "./pages/08_MapComponent";
import ListCreate from "./pages/09_listCreate";
import ToParent from "./pages/10_ToParent";
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
        <Link to="/map2">Map2</Link>| {" "}
        <Link to="/listCreate">ListCreate</Link>| {" "}
        <Link to="/toParent">ToParent</Link>| {" "}
      </nav>
      <Routes>
        <Route path="/event" element={<Event />} />
        <Route path="/event2" element={<Event2 />} />
        <Route path="/hook" element={<Hook />} />
        <Route path="/useEffect" element={<UseEffect />} />
        <Route path="/component" element={<Component />} />
        <Route path="/condition" element={<Condition />} />
        <Route path="/map" element={<Map />} />
        <Route path="/map2" element={<Map2 />} />
        <Route path="/listCreate" element={<ListCreate />} />
        <Route path="/toParent" element={<ToParent />} />
      </Routes>
    </div>
  );
}

export default App;
