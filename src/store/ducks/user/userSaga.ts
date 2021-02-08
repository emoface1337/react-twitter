import { call, put, takeEvery } from 'redux-saga/effects'
import { FetchSignInInterface, UserActions, UserActionsType } from './user'
import { LoadingStatusEnum } from '../../types'
import { AuthApi } from '../../../api/authApi'

export function* fetchSignInRequest({ payload: formData }: FetchSignInInterface) {
    try {
        const data = yield call(AuthApi.signIn, formData)
        yield put(UserActions.setUser(data))
        window.localStorage.setItem('token', data.token)
    } catch (e) {
        yield put(UserActions.setLoadingState(LoadingStatusEnum.ERROR))
    }
}

export function* userSaga() {
    yield takeEvery(UserActionsType.FETCH_SIGN_IN, fetchSignInRequest)
}