import { call, put, takeLatest } from 'redux-saga/effects'
import { FetchSignInInterface, FetchSignUpInterface, UserActions, UserActionsType } from './user'
import { LoadingStatusEnum } from '../../types'
import { AuthApi } from '../../../api/authApi'

export function* fetchSignInRequest({ payload: formData }: FetchSignInInterface) {
    try {
        yield put(UserActions.setSignInLoadingStatus(LoadingStatusEnum.LOADING))
        const data = yield call(AuthApi.signIn, formData)
        window.localStorage.setItem('token', data.token)
        yield put(UserActions.setUser(data.user))
        yield put(UserActions.setSignInLoadingStatus(LoadingStatusEnum.SUCCESS))
    } catch (e) {
        yield put(UserActions.setSignInLoadingStatus(LoadingStatusEnum.ERROR))
        yield put(UserActions.setSignInFetchError(true))
        yield put(UserActions.setFetchError(e.response.data.message))
    }
}

export function* fetchUserDataRequest() {
    try {
        yield put(UserActions.setFetchUserDataLoadingStatus(LoadingStatusEnum.LOADING))
        const { data } = yield call(AuthApi.getMe)
        yield put(UserActions.setUser(data.user))
        yield put(UserActions.setFetchUserDataLoadingStatus(LoadingStatusEnum.SUCCESS))
    } catch (e) {
        yield put(UserActions.setFetchUserDataLoadingStatus(LoadingStatusEnum.ERROR))
        yield put(UserActions.setFetchError('Авторизация не удалась.'))
    }
}

export function* fetchSignUpRequest({ payload: formData }: FetchSignUpInterface) {
    try {
        yield put(UserActions.setSignUpLoadingStatus(LoadingStatusEnum.LOADING))
        yield call(AuthApi.signUp, formData)
        yield put(UserActions.setSignUpLoadingStatus(LoadingStatusEnum.SUCCESS))
    } catch (e) {
        yield put(UserActions.setSignUpLoadingStatus(LoadingStatusEnum.ERROR))
        yield put(UserActions.setSignUpFetchError(true))
        yield put(UserActions.setFetchError(e.response.data.message))
    }
}

export function* userSaga() {
    yield takeLatest(UserActionsType.FETCH_SIGN_IN, fetchSignInRequest)
    yield takeLatest(UserActionsType.FETCH_SIGN_UP, fetchSignUpRequest)
    yield takeLatest(UserActionsType.FETCH_USER_DATA, fetchUserDataRequest)
}