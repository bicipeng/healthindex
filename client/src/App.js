import React, { Fragment, useEffect } from 'react';
import Navbar from "./components/Narbar"
import Landing from "./components/Landing"
import Login from "./components/Login"
import Register from "./components/Register"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import { Provider } from "react-redux"
import store from "./store"
import Axios from "axios"
import "./App.css"
import { loadUser } from "./actions/auth"



const App = () => {
  if(localStorage.token){
    Axios.defaults.headers.common['x-auth-token'] =localStorage.token
        }else{
            delete Axios.defaults.headers.common['x-auth-token']
        }
  useEffect(() => {
    store.dispatch(loadUser())
  }, [])
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Fragment><Navbar /><Route exact path="/" component={Landing} />
          <Switch>
            <Route exact path="/register" component={Register} />
            <Route exact path="/Login" component={Login} />
          </Switch>
        </Fragment>
      </BrowserRouter>
    </Provider>
  );
}

export default App;