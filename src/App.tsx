import React from 'react'
import Sign from './pages/Sign/Sign'
import { Route, Switch } from 'react-router-dom'
import Home from './pages/Home'

//TODO:
// 1. linkify tweet

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
