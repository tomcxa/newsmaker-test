import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'
import Home from './pages/Home'
import News from './pages/News'
import Navbar from './components/Navbar'
import LoginForm from './components/LoginForm'
import { useSelector } from 'react-redux'

function App() {
    const isLoging = useSelector(state => state.auth.isLoging)
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route path="/news">
                    <News />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
            {isLoging && <LoginForm />}
        </Router>
    );
}

export default App;
