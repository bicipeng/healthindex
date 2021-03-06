import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import { getPatientProfile } from '../actions/profile';
import "./patientCard.css"
import { QRCode } from "react-qr-svg"
const styles = {
    root: {
        fontFamily: 'sans-serif',
    },
    h1: {
        textAlign: 'center',
    },
    qrcode: {
        textAlign: 'center',
    },
}

const PatientCard = ({ getPatientProfile, match, profile: { profile, loading } }) => {
    useEffect(() => {
        getPatientProfile(match.params.id)
    }, [getPatientProfile, match.params.id])


    if (profile === null) {
        return <h3>Loading...</h3>
    }
    const { firstName, lastName, dateOfBirth, pharmacy, insurance, policyId, medicineHistory, surgicalHistory } = profile

    let d = dateOfBirth.slice(0, 10)

    return (<div className="container">

        <ul className="unordered-list">
            <li className="list-item">First Name: {firstName}</li>
            <li className="list-item">Last Name: {lastName}</li>
            <li className="list-item">Date of Birth: {d}</li>
            <li className="list-item">Pharmacy: {pharmacy ? pharmacy : "not specify"}</li>
            <li className="list-item">Insurance: {insurance ? insurance : "not specify"}</li>
            <li className="list-item">PolicyId: {policyId ? policyId : "not specify"}</li>
            <li className="list-item">Medicine History: {medicineHistory ? medicineHistory : "not specify"}</li>
            <li className="list-item" >Surgical History: {surgicalHistory ? surgicalHistory : "not specify"}</li>

        </ul>
        <div>
            {loading || profile === null ?
                (<h2>Loading...</h2>) : <Fragment><Link to="/dashboard" className="btn btn-primary my-1">Back To Dashboard</Link></Fragment>}
        </div>
        <div style={styles.qrcode}>
            <h1 style={styles.h1}>Patient Information</h1>
            <div style={styles.qrcode}>
                <QRCode
                    level="Q"
                    style={{ width: 256 }}
                    value={JSON.stringify({
                        firstName,
                        lastName,
                        dateOfBirth,
                        pharmacy,
                        insurance,
                        policyId,
                        medicineHistory,
                        surgicalHistory
                    })}
                />
            </div>
        </div>

    </div>)
}

const mapStateToProps = state => ({
    profile: state.profile,

})
export default connect(mapStateToProps, { getPatientProfile })(PatientCard);
