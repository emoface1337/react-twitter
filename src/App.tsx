import React from 'react'
import Sign from './pages/Sign'
import { Route, Switch } from 'react-router-dom'
import Home from './pages/Home'

//TODO:
// 1. linkify tweet
// 2. desc sort tweets fetching

const App = () => {
    return (
        <div className="App">
            <Switch>
                <Route path="/sign" component={Sign}/>
                <Route path="/" component={Home}/>
            </Switch>
        </div>
    )
}

export default App
