import React, { memo } from 'react'
import { useDispatch } from 'react-redux'
import moment from 'moment'
import { deleteNews, successNews } from '../actions/creators/news'

const Card = memo(({ news, isAdmin }) => {
    const dispatch = useDispatch()

    const deleteHandler = () => {
        dispatch(deleteNews(news.id))
    }

    const successHandler = () => {
        dispatch(successNews(news.id))
    }

    return (
        <div className={`card ${news.success ? 'success' : 'secondary'}`}>
            <div className="card-body">
                <h3>{news.title}</h3>
                <span className="date">{moment(news.date).format("MM.DD.YYYY, HH:mm:ss")}</span>
                <p>{news.text}</p>
            </div>
            { isAdmin && (<div className="card-control">
                {
                    !news.success
                    && <button onClick={successHandler} className="btn success">Одобрить</button>
                }
                <button onClick={deleteHandler} className="btn danger">Удалить</button>
            </div>)}
        </div>
    )
})

export default Card
