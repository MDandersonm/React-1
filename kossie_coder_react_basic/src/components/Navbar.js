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
          <li className="nav-item">
            <NavLink className="nav-link" to="/useReducer">
              UseReducer
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/useReducer2">
              UseReducer2
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/fetch">
              Fetch
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/customHooks">
              CustomHooks
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/customHooks2">
              CustomHooks2
            </NavLink>
          </li>
        </ul>
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link" to="/redux1">
              redux-LifeCoding
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/redux2">
              redux-LifeCoding2
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/reduxtoolkit1">
              reduxToolKit-LifeCoding
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/reduxtoolkit2">
              reduxToolKit-LifeCoding2
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/reduxtoolkit3">
              reduxToolKit-Thunk
            </NavLink>
          </li>
        </ul>
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link" to="/mui1">
              lifeCoding_MUI_Login
            </NavLink>
          </li>
        </ul>
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link" to="/ecma1">
              Array
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/ecma2">
              Variable
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
