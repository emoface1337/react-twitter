import React from 'react'
import Sign from './pages/Sign'
import { Route, Switch } from 'react-router-dom'
import Home from './pages/Home'

function App() {
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
