import { call, put, takeEvery } from 'redux-saga/effects'
import { AddingTweetStatusEnum, AddTweetInterface, LoadingTweetsStatusEnum, TweetsActions, TweetsActionsType } from './tweets'
import { TweetsApi, TweetType } from '../../../api/tweetsApi'

export function* fetchTweetsRequest() {
    try {
        const data = yield call(TweetsApi.fetchTweets)
        yield put(TweetsActions.setTweets(data))
    } catch (e) {
        yield put(TweetsActions.setLoadingState(LoadingTweetsStatusEnum.ERROR))
    }
}

function* addTweet({ payload: text }: AddTweetInterface) {

    try {

        yield put(TweetsActions.setAddingTweetState(AddingTweetStatusEnum.LOADING))

        const tweet: TweetType = {
            id: Math.random().toString(36).substr(2),
            _id: Math.random().toString(36).substr(2),
            text,
            user: {
                fullname: 'Test User',
                username: 'test123',
                avatarUrl: 'https://source.unsplash.com/random/100x100?2'
            }
        }

        const response: TweetType = yield call(TweetsApi.addTweet, tweet)

        yield put(TweetsActions.fetchAddTweetSuccess(response))

    } catch (e) {
        yield put(TweetsActions.setAddingTweetState(AddingTweetStatusEnum.ERROR))
    }

}

export function* tweetsSaga() {
    yield takeEvery(TweetsActionsType.FETCH_ITEMS, fetchTweetsRequest)
    yield takeEvery(TweetsActionsType.ADD_TWEET, addTweet)
}