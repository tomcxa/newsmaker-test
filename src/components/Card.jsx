import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteNews, successNews } from '../actions/creators/news'

const Card = ({ news }) => {
    const dispatch = useDispatch()

    const deleteHandler = () => {
        dispatch(deleteNews(news.id))
    }

    const successHandler = () => {
        dispatch(successNews(news.id))
    }

    return (
        <div className="card">
            <div className={`card-body ${news.success ? 'success' : 'secondary'}`}>
                <h3>{news.title}</h3>
                <span className="date">{news.date}</span>
                <p>{news.text}</p>
            </div>
            <div className="card-control">
                {
                    !news.success
                    && <button onClick={successHandler} className="btn success">Одобрить</button>
                }
                <button onClick={deleteHandler} className="btn danger">Удалить</button>
            </div>
        </div>
    )
}

export default Card
