import { call, takeEvery, put } from 'redux-saga/effects'
import { LoadingStatusEnum } from '../../types'
import { RecommendedUsersActions, RecommendedUsersActionTypes } from './recommendedUsers'
import { RecommendedUsersApi } from '../../../api/recommendedUsersApi'

export function* fetchUsersRequest() {
    try {
        const data = yield call(RecommendedUsersApi.fetchUsers)
        yield put(RecommendedUsersActions.setUsers(data.users))
    } catch (e) {
        console.log(e)
        yield put(RecommendedUsersActions.setLoadingState(LoadingStatusEnum.ERROR))
    }
}

export function* recommendedUsersSaga() {
    yield takeEvery(RecommendedUsersActionTypes.FETCH_ITEMS, fetchUsersRequest)
}