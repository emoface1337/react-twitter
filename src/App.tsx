import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Sign from './pages/Sign/Sign'
import Home from './pages/Home'

//TODO:
// 1. fixing linkify tweet
// 2. make normal redirection if user is authorized

const App = () => {

    return (
        <div className="App">
            <Switch>
                <Route path="/login" component={Sign}/>
                <Route path="/" component={Home}/>
            </Switch>
        </div>
    )
}

export default App
