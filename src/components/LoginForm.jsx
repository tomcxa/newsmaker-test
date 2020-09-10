import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login, loginClose } from '../actions/creators/auth'

import { users } from '../users'

const LoginForm = () => {
    const [value, setValue] = useState({name: '', password: ''})
    const auth = useSelector(state => state.auth)
    const dispatch = useDispatch()

    const submitHandler = (event) => {
        event.preventDefault()
        console.log(value)
        for (let user of users) {
            if (user.name === value.name
                && user.password === value.password) {
                dispatch(login(user))
            }
        }
    }

    const handleChange = (event) => {
        const { name, value } = event.target
        setValue((prev) => ({...prev, [name]: value}))
    }

    const closeHandler = (event) => {
        event.preventDefault()
        dispatch(loginClose())
    }

    return (
        <form onSubmit={submitHandler} className="form">
            {auth.error && <span className="danger">Неверное имя пользователя или пароль</span>}
            <input name="name" onChange={handleChange} />
            <input name="password" type="password" onChange={handleChange} />
            <button className="btn">Создать</button>
            <button onClick={closeHandler} className="btn">Закрыть</button>
        </form>
    )
}

export default LoginForm
