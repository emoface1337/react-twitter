import { CssBaseline, ThemeProvider } from '@material-ui/core'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import { BrowserRouter as Router } from 'react-router-dom'

import App from './App'

import { theme } from './theme/theme'
import store from './store/ducks'

ReactDOM.render(
    <Router>
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <App/>
            </ThemeProvider>
        </Provider>
    </Router>,
    document.getElementById('root')
)