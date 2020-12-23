import { all } from 'redux-saga/effects'
import { tweetsSaga } from './ducks/tweets/tweetsSaga'
import { themesSaga } from './ducks/themes/themesSaga'

export default function* rootSaga() {
    yield all([
        tweetsSaga(),
        themesSaga()
    ])
}