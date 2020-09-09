import {
    CHANGE_FIELD, CLEAR_FIELD, OPEN_FORM
} from '../actions/types'

const createNewsReducer = (state = {isOpen: false, title: '', text: ''}, {type, payload}) => {
    switch (type) {
        case CHANGE_FIELD:
            const {name, value} = payload
            return {
                ...state,
                [name]: value
            }
        case CLEAR_FIELD:
            return {
                title: '', text: '', isOpen: false
            }
        case OPEN_FORM:
            return {
                ...state,
                isOpen: true,
            }
        default:
            return state;
    }
}

export default createNewsReducer