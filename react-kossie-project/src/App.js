// import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import BlogForm from "./components/BlogForm";
import NavBar from "./components/NavBar";
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
            Home Page
          </Route>
          <Route path="/blogs">
            BlogList
          </Route>
          <Route path="/blogs/create">
            <BlogForm />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>

    // </React.Fragment>
  );
}

export default App;
