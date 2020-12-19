
import React, { Fragment, useState } from 'react';
import { Link, Redirect } from "react-router-dom"
import Axios from "axios"
import { register } from "./../actions/auth"
import {connect} from "react-redux"
import "./Form.css"
const Register = ({register,isAuth}) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        passwordConfirmed: ""
    })

    const { name, email, password, passwordConfirmed } = formData
    const handleChange = (evt) => setFormData({ ...formData, [evt.target.name]: evt.target.value })
    const handleSumit = async evt => {
        evt.preventDefault();
        if (passwordConfirmed !== password) {
          alert("passwords do not match ")
        } else {
           register({name,email,password,passwordConfirmed})
        }
    }
if(isAuth){
    <Redirect to = "/dashboard"/>
}
    return (<Fragment>
        <div className="form-container" >
            <h1 className="signup">Sign Up</h1>
            <p className="lead"><i class="fas fa-user-md"></i>Create Your Account</p>
            <form className="form" onSubmit={handleSumit}>
                <div className="form-group">
                    <input type="text" placeholder="Name" value={name} name="name" onChange={handleChange} required />
                </div>
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
                <div className="form-group">
                    <input
                        type="password"
                        placeholder="Confirm Password"
                        name="passwordConfirmed"
                        minLength="8"
                        value={passwordConfirmed}
                        onChange={handleChange}
                        required
                    />
                </div>
                <input type="submit" className="btn btn-primary" value="Register" />
            </form>
            <p className="my-1">
                Already have an account? <Link to="/login">Sign In</Link>
            </p>
        </div>
    </Fragment>);
}
const mapStateToProps = (state)=>({
isAuth:state.auth.isAuth
})
export default connect(mapStateToProps, { register })(Register);