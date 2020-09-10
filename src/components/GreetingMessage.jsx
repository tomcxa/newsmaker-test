import React from 'react'
import { useSelector } from 'react-redux'

const GreetingMessage = () => {
    const user = useSelector(state => state.auth.currentUser)

    return (
        <div className="greeting">
            <h2>Привет, {user?.name || 'Гость'}</h2>
        </div>
    )
}

export default GreetingMessage
