import {
    LOGIN, LOGOUT, LOGIN_SHOW, LOGIN_CLOSE
} from '../actions/types'

const initialState = {
    isLoging: false,
    currentUser: null,
    error: false,
}

const authReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case LOGIN_SHOW:
            return {
                ...state,
                isLoging: true
            }
        case LOGIN_CLOSE:
            return {
                ...state,
                isLoging: false
            }
        case LOGIN:
            return {
                ...state,
                payload,
            };
        case LOGOUT:
            return {
                ...state,
                error: true,
            };
        default:
            return state;
    }
}

export default authReducer