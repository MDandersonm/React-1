import React from "react";
import { Link, NavLink } from "react-router-dom";
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
            <NavLink className="nav-link" to="/ts1">
              CodingNuNa
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/ts2">
              CodingAngma
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/ts3">
              Angma_ECMA6
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/ts4">
              Angma_Promise
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/ts5">
              CodingMoon
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
