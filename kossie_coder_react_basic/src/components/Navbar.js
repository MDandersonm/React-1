import React from "react";
import { Routes, Route, Link, NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm bg-light">
      <div className="">
        <Link className="navbar-brand" to="/">
          Home
        </Link>
      </div>
      <div className="d-flex flex-column align-items-center justify-content-center">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link" to="/useState">
              UseState
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/useEffect">
              UseEffect
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/useRef">
              UseRef
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/focus">
              UseRefFocus
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/useContext">
              UseContext
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/useMemo">
              UseMemo
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/useMemo2">
              UseMemo2
            </NavLink>
          </li>
        </ul>
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link" to="/useCallback">
              UseCallback
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/useCallback2">
              UseCallback2
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
