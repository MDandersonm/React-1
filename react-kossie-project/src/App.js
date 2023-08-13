// import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import routes from "./routes";

function App() {
  return (
    // <React.Fragment>
    <BrowserRouter>
      <NavBar></NavBar>

      <div className="container my-3">
        <Switch>
          {/*switch :  route가 매치되는 순간 뒷 route는 확인하지않음 */}
          {/* exact: / 라고 정확하게 일치해야함 안그러면 /blog도  /로 매칭이됨 */}
          {routes.map((route) => {
            return (
              <Route
                key={route.path}//url이 각각 다르기 때문
                exact
                path={route.path}
                component={route.component}
              ></Route>
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
