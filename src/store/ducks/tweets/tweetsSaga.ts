import { call, takeEvery, put } from 'redux-saga/effects'
import { LoadingStatusEnum, tweetsActions, TweetsActionsType } from './tweets'
import { TweetsApi } from '../../../api/tweetApi'

export function* fetchTweetsRequest() {
    try {
        const data = yield call(TweetsApi.fetchTweets)
        yield put(tweetsActions.setTweets(data))
    }
    catch (e) {
        yield put(tweetsActions.setLoadingState(LoadingStatusEnum.ERROR))
    }
}

export function* tweetsSaga() {
    yield takeEvery(TweetsActionsType.FETCH_TWEETS, fetchTweetsRequest)
}