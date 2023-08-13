// import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";
import EditPage from "./pages/EditPage";
import ListPage from "./pages/ListPage";


function App() {
  return (
    // <React.Fragment>
    <BrowserRouter>
      <NavBar></NavBar>
      <div className="container my-3">
        <Switch>
          {/*switch :  route가 매치되는 순간 뒷 route는 확인하지않음 */}
          {/* exact: / 라고 정확하게 일치해야함 안그러면 /blog도  /로 매칭이됨 */}
          <Route path="/" exact>
            <HomePage/>
          </Route>
          <Route path="/blogs" exact>
            <ListPage></ListPage>
          </Route>
          <Route path="/blogs/create" exact>
            <CreatePage></CreatePage>
          </Route>
          <Route path="/blogs/edit" exact>
            <EditPage></EditPage>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>

    // </React.Fragment>
  );
}

export default App;
