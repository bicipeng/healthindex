import React, { Fragment } from 'react';
import { Link, Redirect } from "react-router-dom"
import { connect } from "react-redux"
import "./Landing.css"

const Landing = ({ isAuth }) => {

  return (<Fragment>{isAuth ? <Redirect to="/dashboard" /> : <section className="landing">
    <div className="dark-overlay">
      <div className="landing-inner">
        <h1 className="x-large">HealthIndex</h1>
        <p className="lead">
          Create an Account
        </p>
        <div className="buttons">
          <Link to="/register" className="btn btn-primary">Sign Up</Link>
          <Link to="/login" className="btn btn-light">Login</Link>
        </div>
      </div>
    </div>
  </section>}

  </Fragment>);
}
const mapStateToProps = state => ({
  isAuth: state.auth.isAuth
})
export default connect(mapStateToProps)(Landing);