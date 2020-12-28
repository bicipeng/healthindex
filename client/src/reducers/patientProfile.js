import { CREATE_PROFILE, GET_PATIENT_PROFILE, GET_PROFILES } from "../actions/types"

const initialState = {
    profile: null,
    profiles: [],
    loading: true,
    error: {}
}

export default function (state = initialState, action) {
    const { type, payload } = action
    console.log("what payload pt profile", payload)
    switch (type) {


        case GET_PROFILES:
            return {
                ...state,
                profiles: payload,
                loading: false
            }
        case CREATE_PROFILE:
            return {
                ...state,
                profile: payload,
                laoding: false
            }
        case GET_PATIENT_PROFILE:
            return {
                ...state,
                profile: payload,
                loading: false
            }
        case CLEAR_PROFILE:
            return {
                ...state,
                profile: null,
   
                loading: false
            }
        case ADD_PROFILE:
            return {
                ...state,
                profiles: [...state.profiles, payload],
                loading: false
            }

        case PROFILE_ERROR:
            return {
                ...state,
                error: payload,
                loading: false

            }
        default:
            return state
    }
}