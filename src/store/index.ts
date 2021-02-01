import { combineReducers, createStore } from 'redux'
import { enhancedStore, sagaMiddleware } from './middleware'
import { tweetsReducer as tweets } from './ducks/tweets/tweets'
import { themesReducer as themes } from './ducks/themes/themes'
import { tweetReducer as tweet } from './ducks/tweet/tweet'
import { userReducer as user } from './ducks/user/user'
import rootSaga from './sagas'

const rootReducer = combineReducers({
    tweets,
    themes,
    tweet,
    user
})

type PropertiesType<T> = T extends { [key: string]: infer U } ? U : never
export type InferActionsTypes<T extends { [key: string]: (...args: any[]) => any }> = ReturnType<PropertiesType<T>>

const store = createStore(rootReducer, enhancedStore)

export type RootState = ReturnType<typeof rootReducer>

sagaMiddleware.run(rootSaga)

export default store
