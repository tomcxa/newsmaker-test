import React from 'react'
import {NavLink} from 'react-router-dom'
import { useSelector } from 'react-redux/lib/hooks/useSelector'
import { useDispatch } from 'react-redux'
import { logout, loginOpen } from '../actions/creators/auth'

const Navbar = () => {
    const auth = useSelector(state => state.auth)
    const dispatch = useDispatch()
    const loginHandler = (event) => {
        event.preventDefault()
        if (auth.currentUser) {
            dispatch(logout())
        } else {
            dispatch(loginOpen())
        }
    }

    return (
        <nav className="nav">
            <ul className="nav-list unstyle">
                <li className="nav-item">
                    <NavLink className="nav-link" activeClassName="active" exact to="/">Главная</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" activeClassName="active" to="/news">Новости</NavLink>
                </li>
                <li className="nav-item">
                    <a onClick={loginHandler} className="nav-link" href="/login">
                        {auth.currentUser ? 'Выход' : 'Вход'}
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
