import React, { useState } from 'react';
import { connect } from "react-redux"
import {Link} from "react-router-dom"
import "./Form.css"


import { createProfile} from '../actions/profile';
const CreatePatientProfile = ({createProfile}) => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        dateOfBirth: "",
        insurance: "",
        policyId: "",
        pharmacy: "",
        medicalHistory: "",
        medicineHistory: "",
        surgicalHistory: ""
    })
    const {
        firstName, lastName,
        dateOfBirth, insurance,
        policyId, medicineHistory,
        pharmacy, surgicalHistory
    } = formData
    const handleChange = (evt) => setFormData({
        ...formData,
        [evt.target.name]: evt.target.value

    })
    const handleSubmit =(evt)=> {
        evt.preventDefault()
        console.log("**formdata",formData)
        createProfile(formData )
    }
    return (
        <div className="form-container">
            <h1 className="large text-primary">
                Create New Patient
      </h1>
            <p className="lead">
                <i className="fas fa-user"></i> Let's get some information to make your
        profile stand out
      </p>
            <small>* = required field</small>
            <form className="form" onSubmit ={handleSubmit}>
                <div className="form-group">
                    <small className="form-text">Patient's First Name </small>
                    <input type="text" placeholder="* First Name " name="firstName" value ={firstName} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <small className="form-text">Patient's Last Name</small>
                    <input type="text" placeholder="* Last Name" name="lastName" value ={lastName} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <small className="form-text"> Patient's Date of Birth</small>
                    <input type="text" placeholder="* Date of Birth" name="dateOfBirth" value={dateOfBirth} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <small className="form-text"> Patient's Insurance Provider</small>
                    <input type="text" placeholder="Insurance" name="insurance" value={insurance} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <small className="form-text"> Patient's Insurance ID Number</small>
                    <input type="text" placeholder="Insurance ID Number" name="policyId" value={policyId} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <small className="form-text"> Pharmacy of the paitent</small>
                    <input
                        type="text"
                        placeholder="Pharmacy"
                        name="pharmacy"
                        value={pharmacy}
                        onChange={handleChange}
                    />

                </div>
                <div className="form-group">
                    <small className="form-text">Surgical History of Patient</small>
                    <textarea placeholder="Surgical History" name="surgicalHistory" value={surgicalHistory} onChange={handleChange}></textarea>

                </div>
                <div className="form-group">
                    <small className="form-text">Medicines History of Patient</small>
                    <textarea placeholder="Medicine History" name="medicineHistory" value={medicineHistory} onChange={handleChange}></textarea>

                </div>

                <input type="submit" className="btn btn-primary my-1" />
                <Link to="/dashboard" className="btn btn-primary my-1" >Go Back</Link>
            </form>
        </div>
    );
}

export default connect(null,{createProfile})(CreatePatientProfile);