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
        <div className="wrapper">            
            <form onSubmit={submitHandler} className="form">
                <h3 className="form__title">Создание новости</h3>
                <input name="title" onChange={handleChange} value={item.title} placeholder="Название новости" />
                <textarea name="text" onChange={handleChange} value={item.text} placeholder="Текст новости" />
                <button className="btn">Создать</button>
                <button onClick={closeHandler} className="btn">Закрыть</button>
            </form>
        </div>
    )
}

export default AddNewsForm
