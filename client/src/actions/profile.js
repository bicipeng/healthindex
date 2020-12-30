import Axios from "axios"
import { GET_PROFILES, PROFILE_ERROR, CLEAR_PROFILE, CREATE_PROFILE,GET_PATIENT_PROFILE } from "./types"

//get current users profile
//profile/me
export const getUserProfile = () => async dispatch => {
    try {
        const res = await Axios.get("/profile/me");
        dispatch({
            type: GET_PROFILES,
            payload: res.data
        })
    } catch (error) {
        dispatch({
            type: PROFILE_ERROR,
            payload: {
                message: "Fail to load profile",
                status: error.response.status
            }
        })
    }

}

//create pt profile

export const createProfile = (formData) => async dispatch => {
        try {
          
            const res = await Axios.post("/newpatient", formData, { headers: { "Content-Type": 'application/json' } })
              console.log("res data in createprofile", res.data)
            dispatch({
                type: CREATE_PROFILE,
                payload: res.data
            })
          
        } catch (error) {
            if(error){
                console.log("error occurs in creating profile")
            }
            dispatch({
                type: PROFILE_ERROR,
                payload: { message: "Error Occurs" },
                status: error.response.status
            })
        }

}
        //get pt profiles
export const getPatientProfiles =()=>async dispatch=>{
    try {
        const res = await Axios.get("/patients")
    dispatch({
        type:GET_PROFILES,
        payload:res.data
    }) 
    } catch (error) {
        dispatch({
            type:PROFILE_ERROR,
            payload:{
            status:error.response.statusText,
            message:"profiles not found "
            }
        })
    }
    
}
//get single profile 

export const  getPatientProfile =(id) =>async dispatch =>{
    try {
        const res = await Axios.get(`/patients/${id}`)
        console.log("here in get single profile",res)
        dispatch({
            type: GET_PATIENT_PROFILE,
            payload:res.data
        })
    } catch (error) {
        dispatch({
            type:PROFILE_ERROR,
            payload:{
                message:"Error Occured",
                status:error.response.statusText,
            }
        })
    }
}