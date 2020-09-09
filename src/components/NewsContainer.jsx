import { useSelector, useDispatch } from 'react-redux'
import React from 'react'
import Card from './Card'
import AddNewsForm from './AddNewsForm'
import { openForm } from '../actions/creators/createNews'

const NewsContainer = () => {
    const news = useSelector(state => state.news)
    const showAddNewsForm = useSelector(state => state.createNews.isOpen)
    const dispatch = useDispatch()

    const createNewsHandler = () => {
        dispatch(openForm())
    }

    return (
        <div className="container">
            {
                showAddNewsForm && <AddNewsForm />
            }
            <header className="news-header">
                <h2>Новости</h2>
                <button onClick={createNewsHandler} className="btn">Создать новость</button>
            </header>
            {news.map(item => <Card key={item.id} news={item} />)}
        </div>
    )
}

export default NewsContainer
