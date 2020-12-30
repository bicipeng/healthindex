
import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Link, Route } from "react-router-dom"

const PatientProfiles = ({ profiles }) => {
    // useEffect(()=>{
    //     getPatientProfiles()
    // },[])
    // if(loading && profiles.length!==0){
    //     return <h2>Loading....</h2>
    // }

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
//  const mapStateToProps = state =>({
// profile:state.profile
//  })
export default connect()(PatientProfiles);