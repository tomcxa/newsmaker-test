import {
    CHANGE_FIELD, CLEAR_FIELD, OPEN_FORM
} from '../types'

export const changeField = (name, value) => ({
    type: CHANGE_FIELD,
    payload: { name, value }
})

export const openForm = () => ({
    type: OPEN_FORM
})

export const clearField = () => ({
    type: CLEAR_FIELD
})