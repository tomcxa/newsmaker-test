import {
    LOGIN, LOGOUT, LOGIN_SHOW, LOGIN_CLOSE
} from '../types'

export const login = (user) => ({
    type: LOGIN,
    payload: { ...user }
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