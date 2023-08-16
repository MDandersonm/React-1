import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";
const ProtectedRoute = ({ path, addToast, Component,key }) => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  if (!isLoggedIn) {
    return <Redirect to="/"></Redirect>;
  }
  return (
    <Route path={path} key={key} exact>
      {" "}
      <Component addToast={addToast} />
    </Route>
  );
};

export default ProtectedRoute;
