import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeField, clearField } from '../actions/creators/createNews'
import { addNews } from '../actions/creators/news'

const AddNewsForm = () => {
    const item = useSelector(state => state.createNews)
    const dispatch = useDispatch()

    const submitHandler = (event) => {
        event.preventDefault()
        if (item.title && item.text) {
            dispatch(addNews(item))
            dispatch(clearField())
        }
    }

    const handleChange = (event) => {
        const { name, value } = event.target
        dispatch(changeField(name.trim(), value.trim()))
    }

    const closeHandler = (event) => {
        event.preventDefault()
        dispatch(clearField())
    }

    return (
        <form onSubmit={submitHandler} className="form">
            <input name="title" onChange={handleChange} value={item.title} />
            <input name="text" onChange={handleChange} value={item.text} />
            <button className="btn">Создать</button>
            <button onClick={closeHandler} className="btn">Закрыть</button>
        </form>
    )
}

export default AddNewsForm