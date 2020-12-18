import React, { Fragment } from 'react';
import Navbar from "./components/Narbar"
import Landing from "./components/Landing"
import Login from "./components/Login"
import Register from "./components/Register"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import "./App.css"

const App = () => {
  return (
    <BrowserRouter>
      <Fragment><Navbar /><Route exact path="/" component={Landing} />
        <Switch>
          <Route exact path="/register" component={Register} />
          <Route exact path="/Login" component={Login} />
        </Switch>
      </Fragment></BrowserRouter>
  );
}

export default App;
