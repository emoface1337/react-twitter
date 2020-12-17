import {CssBaseline, ThemeProvider} from '@material-ui/core'
import React from 'react'
import ReactDOM from 'react-dom'

import {BrowserRouter as Router} from 'react-router-dom'

import App from './App'

import {theme} from './theme/theme'

ReactDOM.render(
    <Router>
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <App/>
        </ThemeProvider>
    </Router>,
    document.getElementById('root')
)