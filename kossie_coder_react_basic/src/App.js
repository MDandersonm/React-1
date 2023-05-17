import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Event from "./pages/Event";
import Event2 from "./pages/Event2";
import Hook from "./pages/Hook";
function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/event">Event</Link> | {" "}
        <Link to="/event2">Event2</Link> | {" "}
        <Link to="/hook">Hook</Link>
      </nav>
      <Routes>
        <Route path="/event" element={<Event />} />
        <Route path="/event2" element={<Event2 />} />
        <Route path="/hook" element={<Hook />} />
      </Routes>
    </div>
  );
}

export default App;
