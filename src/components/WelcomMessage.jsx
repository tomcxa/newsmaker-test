import React from 'react'
import { useSelector } from 'react-redux'

const WelcomMessage = () => {
    const user = useSelector(state => state.auth.currentUser)
    
    return (
        <div className="welcom">
            {/* <h2>Привет, {user ? user.name : 'Гость'}</h2> */}
            asdasd
        </div>
    )
}

export default WelcomMessage
