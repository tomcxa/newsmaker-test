import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { openForm } from '../actions/creators/createNews'
import Card from './Card'
import AddNewsForm from './AddNewsForm'

const NewsContainer = () => {
    const [filter, setFilter] = useState('')
    const news = useSelector(state => state.news)
    const showAddNewsForm = useSelector(state => state.createNews.isOpen)
    const user = useSelector(state => state.auth.currentUser)
    const dispatch = useDispatch()

    const createNewsHandler = () => {
        dispatch(openForm())
    }

    const handleChange = (event) => {
        const { name, value } = event.target
        setFilter(value)
        console.log(name, value)
    }

    return (
        <div className="container">
            {showAddNewsForm && <AddNewsForm />}
            <header className="news-header">
                <h2>Новости</h2>
                <input name="search" placeholder="Поиск" onChange={handleChange} />
                {user && <button onClick={createNewsHandler} className="btn">Создать новость</button>}
            </header>
            {news.filter(item => {
                if (!user) {
                    return item.title.toLowerCase().includes(filter.toLowerCase()) && item.success
                }
                return item.title.toLowerCase().includes(filter.toLowerCase())
            }).map(item => <Card key={item.id} news={item} isAdmin={user?.isAdmin} />)}
        </div>
    )
}

export default NewsContainer
