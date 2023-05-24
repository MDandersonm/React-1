import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.css";
import routes from "./routes";
const App: React.FC = () => {
  return (
    <div className="App">
       <Navbar></Navbar>
       <div className="container mt-5">
       <Routes>
       {routes.map((route) => {
            return (
              <Route key={route.path} path={route.path}  element={<route.component />}/>
            );
          })}
       </Routes>


       </div>
     
    </div>
  );
};

export default App;
