import React, { useCallback, useEffect } from 'react'
import { Route, Switch, useHistory } from 'react-router-dom'

import Sign from './pages/Sign/Sign'
import Home from './pages/Home'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from './store'
import { selectIsAuth } from './store/ducks/user/selectors'
import { UserActions } from './store/ducks/user/user'
import { AuthApi } from './api/authApi'

//TODO:
// 1. fix linkify tweet
// 2. make normal redirection if user is authorized
// 3. add checking authorized user when app starts


const App = () => {

    const history = useHistory()
    const dispatch = useDispatch()

    const isAuth = useSelector((state: RootState) => selectIsAuth(state))

    const checkAuth = useCallback(
        async () => {
            try {
                const { data } = await AuthApi.getMe()
                dispatch(UserActions.setUser(data))
            }
            catch {
                console.log('get me error')
            }
        }, [dispatch]
    )

    useEffect(() => {
        checkAuth()
    }, [checkAuth, dispatch])

    useEffect(() => {
        if (isAuth) {
            history.push('/home')
        }
    }, [history, isAuth])

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
