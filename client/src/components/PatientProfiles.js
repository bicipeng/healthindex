
import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom"

const PatientProfiles = ({ profiles }) => {


    return (<Fragment>
        { !profiles ? (<h2>Loading...</h2>) : (<div>

            <h3 className="lead-sub">Patients</h3>

            {
                profiles.map((profile, idx) => (


                    <li className ="list-item" key={idx}> <Link to={`/patients/${profile._id}`}>{profile.firstName},{profile.lastName}</Link></li>

                ))
            }
        </div>)}

    </Fragment>);
}

export default connect()(PatientProfiles);