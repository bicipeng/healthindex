import React, { Component, Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { getPatientProfiles } from '../actions/profile';
import PatientCard from './PatientCard';
const PatientProfiles = ({getPatientProfiles,profile:{profiles,loading}}) => {
    useEffect(()=>{
        getPatientProfiles()
    },[])
if(loading && profiles.length!==0){
    return <h2>Loading....</h2>
}
    return (<Fragment>
{loading &&  profiles.length === 0 ? (<h2>Loading...</h2>):(<div>

{
    profiles.map((profile,idx)=>(
        <PatientCard key={idx} profile={profile}/>
    ))
}
</div>)}

    </Fragment> );
}
 const mapStateToProps = state =>({
profile:state.profile
 })
export default connect(mapStateToProps,{getPatientProfiles}) (PatientProfiles);