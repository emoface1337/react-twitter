import { call, put, takeEvery } from 'redux-saga/effects'

import { AddingTweetStatusEnum, AddTweetInterface, TweetsActions, TweetsActionsType } from './tweets'
import { TweetsApi, TweetType } from '../../../api/tweetsApi'
import { LoadingStatusEnum } from '../../types'

export function* fetchTweetsRequest() {
    try {
        const data: TweetType[] = yield call(TweetsApi.fetchTweets)
        yield put(TweetsActions.setTweets(data))
    } catch (e) {
        yield put(TweetsActions.setLoadingState(LoadingStatusEnum.ERROR))
    }
}

function* addTweet({ payload: text }: AddTweetInterface) {
    try {
        yield put(TweetsActions.setAddingTweetState(AddingTweetStatusEnum.LOADING))
        const data: TweetType = yield call(TweetsApi.addTweet, text)
        yield put(TweetsActions.fetchAddTweetSuccess(data))
    } catch (e) {
        yield put(TweetsActions.setAddingTweetState(AddingTweetStatusEnum.ERROR))
    }
}

export function* tweetsSaga() {
    yield takeEvery(TweetsActionsType.FETCH_ITEMS, fetchTweetsRequest)
    yield takeEvery(TweetsActionsType.ADD_TWEET, addTweet)
}