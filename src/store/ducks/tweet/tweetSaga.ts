import { call, takeLatest, put } from 'redux-saga/effects'
import { FetchTweetInterface,TweetActions, TweetActionsType } from './tweet'
import { TweetsApi, TweetType } from '../../../api/tweetsApi'
import { LoadingStatusEnum } from '../../types'

export function* fetchTweetRequest({ payload: tweetId }: FetchTweetInterface) {
    try {
        const data: TweetType = yield call(TweetsApi.fetchTweet, tweetId)
        yield put(TweetActions.setTweet(data))
    } catch (e) {
        yield put(TweetActions.setLoadingState(LoadingStatusEnum.ERROR))
    }
}

export function* tweetSaga() {
    yield takeLatest(TweetActionsType.FETCH_TWEET, fetchTweetRequest)
}