import { Link, Redirect } from "react-router-dom"

import React, { Fragment, useEffect } from 'react';
import { connect } from "react-redux"
import { loadUser } from '../../actions/auth';
import { getPatientProfiles } from "../../actions/profile"
// import "../Form.css"
import "../dashboard.css"
import PatientProfiles from "../PatientProfiles";
const Dashboard = ({ auth: { user }, getPatientProfiles, profile: { profiles } }) => {
    useEffect(() => {
        getPatientProfiles()
    }, [])


    if (!user) {
        return <h2>Loading...</h2>
    }

    return (<div className="container" >
        <h1 className="large text-primary">Dashboard</h1>
        <div className="lead-sub">
            <i><i className="fas fa-user-md"></i>Welcome {user.firstName}, {user.lastName}</i>
        </div>
        <div>
            <p className="lead-sub">NPI: {user.NPI}</p>
        </div>
        <div> {profiles.length !== 0 ? (<PatientProfiles profiles={profiles} />) : <Fragment />}</div>
        <div> <Fragment>

            <Link to="/create-new-patient" className="btn btn-primary my-1">New patient</Link></Fragment>
        </div>

    </div>);
}
const mapStateToProps = state => ({
    auth: state.auth,
    profile: state.profile
})

export default connect(mapStateToProps, { getPatientProfiles })(Dashboard);

