import { applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import thunk from 'redux-thunk'

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: typeof compose
    }
}

const devtools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
const composeEnhancers = devtools || compose

export const sagaMiddleware = createSagaMiddleware()

const enhancedStore = composeEnhancers(applyMiddleware(thunk, sagaMiddleware))

export { enhancedStore }
