
import React, { Fragment, useState } from 'react';
import { Link, Redirect } from "react-router-dom"
import { connect } from "react-redux"
import "./Form.css"

import { login } from "./../actions/auth"
const Login = ({ login,isAuth }) => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    })

    const { email, password } = formData
    const handleChange = (evt) => setFormData({ ...formData, [evt.target.name]: evt.target.value })
    const handleSumit = async evt => {
        evt.preventDefault();
        login({ email, password })
    }
if(isAuth){
    return <Redirect to ="/dashboard"/>
}
    return (<Fragment>
        <div className="form-container" >
            <h1 className="login">Log in </h1>
            <p className="lead"><i className="fas fa-user-md"></i>Sign in to Your Account</p>
            <form className="form" onSubmit={handleSumit}>

                <div className="form-group">
                    <input type="email" placeholder="Email Address" name="email" value={email} onChange={handleChange} required />

                </div>
                <div className="form-group">
                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        minLength="8"
                        value={password}
                        onChange={handleChange}
                        required
                    />
                </div>

                <input type="submit" className="btn btn-primary" value="Login" />
            </form>
            <p className="my-1">
                Need an Account?<Link to="/register">Create an account</Link>
            </p>
        </div>
    </Fragment>);
}
const mapStateToProps = state => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, { login })(Login);