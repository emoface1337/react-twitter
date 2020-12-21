import { all } from 'redux-saga/effects'
import { tweetsSaga } from './tweets/tweetsSaga'

export default function* rootSaga() {
    yield all([
        tweetsSaga()
    ])
}