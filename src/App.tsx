import React, { useEffect } from 'react'
import { Route, Switch, useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import Sign from './pages/Sign/Sign'
import Home from './pages/Home'

import { UserActions } from './store/ducks/user/user'
import { selectFetchUserDataLoadingStatus, selectIsAuth } from './store/ducks/user/selectors'
import { LoadingStatusEnum } from './store/types'

//TODO:
// 1. fix linkify tweet
// 2. fix adding status when adding tweet by button on side menu

const App = () => {

    const history = useHistory()
    const dispatch = useDispatch()

    const isAuth = useSelector(selectIsAuth)
    const loadingStatus = useSelector(selectFetchUserDataLoadingStatus)
    const isReady = loadingStatus !== LoadingStatusEnum.NEVER && loadingStatus !== LoadingStatusEnum.LOADING

    useEffect(() => {
        dispatch(UserActions.fetchUserData())
    }, [dispatch])

    useEffect(() => {
        if (!isAuth && isReady) {
            history.push('/login')
        } else if (history.location.pathname === '/') {
            history.push('/home')
        }
        if (isAuth && isReady) {
            history.push('/home')
        }
    }, [dispatch, history, isAuth, isReady])

    return (
        <div className="App">
            <Switch>
                <Route path="/login" component={Sign}/>
                <Route path="/home" component={Home}/>
            </Switch>
        </div>
    )
}

export default App
