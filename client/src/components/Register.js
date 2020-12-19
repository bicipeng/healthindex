
import React, { Fragment, useState } from 'react';
import "./Form.css"
const Register = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        passwordConfirmed: ""
    })

    const { name, email, password, passwordConfirmed } = formData
    const handleChange = (evt) => setFormData({ ...formData, [evt.target.name]: evt.target.value })
    const handleSumit = evt =>{
        evt.preventDefault();
        if(passwordConfirmed!==password){
            console.log("password do not match ")
        }else {
            console.log(formData)
        }
    }

    return (<Fragment>
        <div className="form-container" >
            <h1 className="signup">Sign Up</h1>
            <p className="lead"><i className="fas fa-user"></i> Create Your Account</p>
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
                Already have an account? <a href="login.html">Sign In</a>
            </p>
        </div>
    </Fragment>);
}

export default Register;