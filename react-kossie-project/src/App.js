// import React from 'react';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import BlogForm from './components/BlogForm'
function App() {
  return (
    // <React.Fragment>
    <BrowserRouter>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">
            Home
          </Link>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/blogs">
                Blogs
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className="container my-3">
      <Switch>
        {/*switch :  route가 매치되는 순간 뒷 route는 확인하지않음 */}
        {/* exact: / 라고 정확하게 일치해야함 안그러면 /blog도  /로 매칭이됨 */}
        <Route path="/" exact>
          Home Page
        </Route>
        <Route path="/blogs">
          <BlogForm/>
        </Route>
      </Switch>
      </div>
    </BrowserRouter>

    // </React.Fragment>
  );
}

export default App;
