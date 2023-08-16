// import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Toast from "./components/Toast";
import routes from "./routes";
import useToast from "./hooks/toast";
import { useDispatch, useSelector } from "react-redux";
import ProtectedRoute from "./ProtectedRoute";
import { useEffect, useState } from "react";
import { login } from "./store/authSlice";
import LoadingSpinner from "./components/LoadingSpinner";
function App() {
  // const [toasts, addToast, deleteToast] = useToast();
  // const [addToast, deleteToast] = useToast();
  const { addToast, deleteToast } = useToast();
  const toasts = useSelector((state) => state.toast.toasts);

  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    //useEffect는 컴퍼넌트가 랜더링되고 제일 마지막에 실행됨
    if (localStorage.getItem("isLoggedIn")) {
      //로그인이되어있으면
      dispatch(login());
    }
    setLoading(false); //useEffect가 끝난후 컴퍼넌트가 랜더링되게끔 하기
  }, []);

  if (loading) {
    return <LoadingSpinner></LoadingSpinner>;
  }
  return (
    // <React.Fragment>
    <BrowserRouter>
      <NavBar></NavBar>
      <Toast toasts={toasts} deleteToast={deleteToast}></Toast>

      <div className="container my-3">
        <Switch>
          {/*switch :  route가 매치되는 순간 뒷 route는 확인하지않음 */}
          {/* exact: / 라고 정확하게 일치해야함 안그러면 /blog도  /로 매칭이됨 */}
          {routes.map((route) => {
            const Component = route.component;
            if (route.auth) {
              return (
                <ProtectedRoute
                  path={route.path}
                  addToast={addToast}
                  Component={Component}
                  key={route.path}
                ></ProtectedRoute>
              );
            }
            return (
              <Route
                key={route.path} //url이 각각 다르기 때문
                exact
                path={route.path}
                // component={route.component}
              >
                <Component addToast={addToast} />
              </Route>
              /* <Route path="/" exact>
                <HomePage />
                </Route>,
                <Route path="/blogs" exact>
                <ListPage></ListPage>
                </Route>,
                <Route path="/blogs/create" exact>
                <CreatePage></CreatePage>
                </Route>,
                <Route path="/blogs/edit" exact>
                <EditPage></EditPage>
                </Route>, */
            );
          })}
        </Switch>
      </div>
    </BrowserRouter>

    // </React.Fragment>
  );
}
export default App;
