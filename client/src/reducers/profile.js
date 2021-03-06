import { PROFILE_ERROR, GET_PROFILES, GET_PATIENT_PROFILE, CLEAR_PROFILE } from "../actions/types"

const initialState = {
    profile: null,
    profiles: [],
    loading: true,
    error: {}
}

export default function profile(state = initialState, action) {
    const { type, payload } = action

    switch (type) {

        case GET_PROFILES:

            return {
                ...state,
                profiles: payload,
                loading: false
            }
        case CLEAR_PROFILE:
            return {
                ...state,
                profiles: [],
                profile:null,
                loading: false
            }

        case PROFILE_ERROR:
            return {
                ...state,
                error: payload,
                loading: false

            }
        case GET_PATIENT_PROFILE:
            return {
                ...state,
                profile: payload,
                loading: false
            }
        default:
            return state
    }
}