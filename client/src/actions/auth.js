import Axios from "axios";
import { REGISTER_SUCCESS, REGISTER_FAIL, USER_FOUND, UNAUTHRIZED, LOGIN_FAIL, LOGIN_SUCCESS,LOG_OUT } from "./types";


export const register = ({ name, email, password, passwordConfirmed }) => async dispatch => {
    try {
        const user = {
            name, email, password, passwordConfirmed
        }
        const res = await Axios.post("/users", user, {
            headers: {
                "Conten-Type": "application/json"
            }
        })
        dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data
        })
        dispatch(loadUser())
    } catch (error) {
        dispatch({
            type: REGISTER_FAIL
        })
    }
}
//if we have a token, send it to the backend ,hit /auth route to check if user is logged in or not 
//we need the token to stay in the localStorage s.t. a user can stay log in 

export const loadUser = () => async dispatch => {
    if (localStorage.token) {
        Axios.defaults.headers.common['x-auth-token'] = localStorage.token
    } else {
        delete Axios.defaults.headers.common['x-auth-token']
    }
    try {
        const res = await Axios.get("/auth")
        dispatch({
            type: USER_FOUND,
            payload: res.data
        })

    } catch (error) {
        dispatch({
            type: UNAUTHRIZED
        })

    }
}



export const login = ({ email, password }) => async dispatch => {
    try {
        const user = {
            email, password
        }
        const res = await Axios.post("/auth", user, {
            headers: {
                "Conten-Type": "application/json"
            }
        })
        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        })
        //make sure stays login 
        dispatch(loadUser())
    } catch (error) {
        dispatch({
            type: LOGIN_FAIL
        })
    }
}

export const logout = () => async dispath =>{
   dispath({
       type: LOG_OUT
   })
}