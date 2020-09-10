import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login, loginClose } from '../actions/creators/auth'
import { findUser } from '../helpers/findUser'

const LoginForm = () => {
    const [value, setValue] = useState({ name: '', password: '' })
    const [invalid, setInvalid] = useState(false)
    const dispatch = useDispatch()

    const submitHandler = (event) => {
        event.preventDefault()
        const loggedUser = findUser(value)
        console.log(loggedUser)
        if (loggedUser) {
            dispatch(login(loggedUser))
            dispatch(loginClose())
        } else {
            setInvalid(true)
        }

    }

    const handleChange = (event) => {
        const { name, value } = event.target
        setValue((prev) => ({ ...prev, [name]: value }))
    }

    const closeHandler = (event) => {
        event.preventDefault()
        dispatch(loginClose())
    }

    return (
        <div className="wrapper">
            <form onSubmit={submitHandler} className="form">
                {invalid && <span className="info danger">Неверное имя пользователя или пароль</span>}
                <input name="name" onChange={handleChange} placeholder="Логин" />
                <input name="password" type="password" onChange={handleChange} placeholder="Пароль" />
                <div className="btngroup">
                    <button className="btn">Создать</button>
                    <button onClick={closeHandler} className="btn">Закрыть</button>
                </div>
            </form>
        </div>
    )
}

export default LoginForm
