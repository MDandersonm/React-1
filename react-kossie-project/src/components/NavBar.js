import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { login, logout } from "../store/authSlice"; //액션가져오기
const NavBar = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Home
        </Link>
        <ul style={{ flexDirection: "row" }} className="navbar-nav">
          <li className="nav-item me-2">
            <button
              className="text-white btn btn-link text-decoration-none"
              onClick={() => {
                if (isLoggedIn) {
                  dispatch(logout());
                } else {
                  dispatch(login());
                }
              }}
            >
              {isLoggedIn ? "Logout" : "Login"}
            </button>
          </li>
          {isLoggedIn ? (
            <li className="nav-item me-2">
              <NavLink
                //exact
                activeClassName="active"
                className="nav-link"
                aria-current="page"
                to="/admin"
              >
                Admin
              </NavLink>
            </li>
          ) : null}
          <li className="nav-item">
            <NavLink
              //exact
              activeClassName="active"
              className="nav-link"
              aria-current="page"
              to="/blogs"
            >
              Blogs
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
