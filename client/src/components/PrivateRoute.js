import React from 'react';
import { connect } from "react-redux"
import { Redirect, Route } from "react-router-dom"
//private route referencr 
//https://medium.com/@thanhbinh.tran93/private-route-public-route-and-restricted-route-with-react-router-d50b27c15f5e
const PrivateRoute = ({ component: Component, auth: { isAuth, loading }, ...rest }) => 
(<Route {...rest} render={props => !isAuth && !loading ?
     (<Redirect to="/login" />) : (<Component {...props} />)} />)

const mapStateToProps = state => ({
    auth: state.auth
})
export default connect(mapStateToProps)(PrivateRoute);