import { Link } from "react-router-dom"

import React, { Fragment, useEffect } from 'react';
import { connect } from "react-redux"
import { loadUser } from '../../actions/auth';
import { getPatientProfiles} from "../../actions/profile"
import "../Form.css"
import PateintProfiles from "../PateintProfiles";
const Dashboard = ({  auth: { user }, profile: { profile, loading } }) => {
    // useEffect(() => {
    //     getPatientProfiles()
    // }, [])

    // if (loading && user === null) {
    //     <h2>Loading.... </h2>
    // } else {
    //     <Fragment />
    // }
   
    console.log(".......dashboar User", user)

    return  (<div className="form-container" >
        <h1 className="large text-primary">Dashboard</h1>
        <div>
            <i><i className="fas fa-user-md"></i>Welcome {user.firstName}, {user.lastName}</i>
        </div>
        <div>
            <small>NPI: {user.NPI}</small>
        </div>
        <div> {profile !== null ? <PateintProfiles/> : <Fragment />}</div>
        <div> <Fragment>
            <small>Create New:  </small>
            <Link to="/create-new-patient" className="btn btn-primary my-1">Patient Profile</Link></Fragment>
        </div>

    </div>);
}
const mapStateToProps = state => ({
    auth: state.auth,
    profile: state.profile
})

export default connect(mapStateToProps, null)(Dashboard);

