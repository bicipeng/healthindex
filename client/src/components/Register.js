
import React, { Fragment, useState } from 'react';
import { Link, Redirect } from "react-router-dom"
import { register } from "./../actions/auth"
import { connect } from "react-redux"
import "./Form.css"
const Register = ({ register, isAuth }) => {
    const [formData, setFormData] = useState({

        firstName: "",
        lastName: "",
        NPI: "",
        email: "",
        password: "",
        passwordConfirmed: ""
    })

    const { firstName, lastName, NPI, email, password, passwordConfirmed } = formData
    const handleChange = (evt) => setFormData({ ...formData, [evt.target.name]: evt.target.value })
    const handleSumit = async evt => {
        evt.preventDefault();
        if (passwordConfirmed !== password) {
            alert("passwords do not match ")
        } else {
            register({ firstName, lastName, NPI, email, password, passwordConfirmed })
        }
    }

    if (isAuth) {
      return  <Redirect to="/dashboard" />
    }
    return (<Fragment>
        <div className="form-container" >
            <h1 className="login">Sign Up</h1>
            <p className="lead"><i class="fas fa-user-md"></i>Create Your Account</p>
            <form className="form" onSubmit={handleSumit}>
                <div className="form-group">
                    <input type="text" placeholder="First Name" value={firstName} name="firstName" onChange={handleChange} required />

                </div>
                <div className="form-group">
                    <input type="text" placeholder="Last Name" value={lastName} name="lastName" onChange={handleChange} required />

                </div>
                <div className="form-group">
                    <input type="text" placeholder="NPI (National Provider Identifier)" value={NPI} name="NPI" onChange={handleChange} required />

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
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, { register })(Register);