//register user 
import { REGISTER_SUCCESS, REGISTER_FAIL, UNAUTHRIZED, USER_FOUND ,LOGIN_FAIL,LOGIN_SUCCESS,LOG_OUT} from "../actions/types"

const initialState = {
    //token is stored in localStorage which has a getItem method
    token: localStorage.getItem("token"),
    isAuth: null,
    loading: true,
    user: null
}

export default function (state = initialState, action) {
    switch (action.type) {
        case REGISTER_SUCCESS:
        case LOGIN_SUCCESS:
            localStorage.setItem("token", action.payload.token)
            return {
                ...state,
                ...action.payload,
                isAuth: true,
                loading: false
            }
        case REGISTER_FAIL:
        case LOG_OUT: 
            localStorage.removeItem("token")
            return {
                ...state,
                token: null,
                isAuth: false,
                loading: false

            }
        case USER_FOUND:
            return {
                ...state,
                isAuth: true,
                loading: false,
                user: action.payload
            }

        case UNAUTHRIZED:
        case LOGIN_FAIL:
            localStorage.removeItem("token")
            return {
                ...state,
                token: null,
                isAuth: false,
                loading: false

            }
      

        default: return state;
    }
}