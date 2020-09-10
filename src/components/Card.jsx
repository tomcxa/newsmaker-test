import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteNews, successNews } from '../actions/creators/news'
import { memo } from 'react'

const Card = memo(({ news, user }) => {
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
                <span className="date">{news.date}</span>
                <p>{news.text}</p>
            </div>
            { user?.admin && (<div className="card-control">
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
