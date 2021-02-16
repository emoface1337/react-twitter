import { all } from 'redux-saga/effects'
import { tweetsSaga } from './ducks/tweets/tweetsSaga'
import { themesSaga } from './ducks/themes/themesSaga'
import { tweetSaga } from './ducks/tweet/tweetSaga'
import { userSaga } from './ducks/user/userSaga'
import { recommendedUsersSaga } from './ducks/recommendedUsers/recommendedUsersSaga'

export default function* rootSaga() {
    yield all([
        tweetsSaga(),
        themesSaga(),
        tweetSaga(),
        userSaga(),
        recommendedUsersSaga()
    ])
}