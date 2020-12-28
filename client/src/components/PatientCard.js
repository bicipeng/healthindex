import React, { Component, Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { getPatientProfile } from '../actions/profile';


const PatientCard = ({ profile: { firstName, lastName, dateOfBirth, pharmacy, insurance, policyId, medicineHistory, surgicalHistory } }) => {
    // useEffect(() => {
    //     getPatientProfile(match.params.id)
    // }, [getPatientProfile, match.params.id])
    return (<Fragment>
        {/* {loading || profile === null ?
         (<h2>Loading...</h2>) : <Fragment><Link to="/profiles" className="btn">Back To Posts</Link></Fragment>} */}
        <ul>
            <li>First Name:{firstName}</li>
            <li>Last Name:{lastName}</li>
            <li>dateOfBirth:{dateOfBirth}</li>
        </ul>
    </Fragment>)

}

{/* const mapStateToProps = state => ({
    profile: state.profile
})
export default connect(getPatientProfile)(PartientCard); */}

export default PatientCard