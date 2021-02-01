import { call, takeEvery, put } from 'redux-saga/effects'
import { themesActions, ThemesActionsType } from './themes'
import { ThemesApi } from '../../../api/themesApi'
import { LoadingStatusEnum } from '../../types'

export function* fetchThemesRequest() {
    try {
        const data = yield call(ThemesApi.fetchThemes)
        yield put(themesActions.setThemes(data))
    }
    catch (e) {
        yield put(themesActions.setLoadingState(LoadingStatusEnum.ERROR))
    }
}

export function* themesSaga() {
    yield takeEvery(ThemesActionsType.FETCH_ITEMS, fetchThemesRequest)
}