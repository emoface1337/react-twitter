import { RootState } from '../../index'
import { AddingTweetStatusEnum, LoadingTweetsStatusEnum } from './tweets'

export const tweetsSelectors = {
    tweetsSelector: (state: RootState) => state.tweets.tweets,
    loadingStatusSelector: (state: RootState): LoadingTweetsStatusEnum => state.tweets.loadingStatus,
    addingTweetStatusSelector: (state: RootState): AddingTweetStatusEnum => state.tweets.addingTweetStatus,
    isTweetsLoadingSelector: function (state: RootState): boolean {
        return this.loadingStatusSelector(state) === LoadingTweetsStatusEnum.LOADING
    },
    isTweetsLoadedSelector: function (state: RootState): boolean {
        return this.loadingStatusSelector(state) === LoadingTweetsStatusEnum.LOADED
    },
    isTweetLoadingStatusSelector: function (state: RootState): boolean {
        return this.addingTweetStatusSelector(state) === AddingTweetStatusEnum.LOADING
    },
    isTweetErrorStatusSelector: function (state: RootState): boolean {
        return this.addingTweetStatusSelector(state) === AddingTweetStatusEnum.ERROR
    }
}
