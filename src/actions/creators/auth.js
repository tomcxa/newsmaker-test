import {
    LOGIN, LOGOUT, LOGIN_SHOW, LOGIN_CLOSE
} from '../types'

export const login = (name, password, error) => ({
    type: LOGIN,
    payload: { name, password, error }
})

export const logout = () => ({
    type: LOGOUT
})

export const loginOpen = () => ({
    type: LOGIN_SHOW
})

export const loginClose = () => ({
    type: LOGIN_CLOSE
})