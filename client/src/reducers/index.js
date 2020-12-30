import {combineReducers} from "redux"
import auth from "./auth"
import profile from "./profile"
import patientProfile from "./patientProfile"

export default combineReducers({
    auth,
    profile ,
    patientProfile
})