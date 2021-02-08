import { RootState } from '../../index'
import { AddingTweetStatusEnum } from './tweets'
import { LoadingStatusEnum } from '../../types'

export const tweetsSelectors = {
    tweetsSelector: (state: RootState) => state.tweets.tweets,
    loadingStatusSelector: (state: RootState): LoadingStatusEnum => state.tweets.loadingStatus,

    isTweetsLoadingSelector: function (state: RootState): boolean {
        return this.loadingStatusSelector(state) === LoadingStatusEnum.LOADING
    },
    isTweetsLoadedSelector: function (state: RootState): boolean {
        return this.loadingStatusSelector(state) === LoadingStatusEnum.LOADED
    },

    // adding tweet
    addingTweetStatusSelector: (state: RootState): AddingTweetStatusEnum => state.tweets.addingTweetStatus,

    isTweetAddingSelector: function (state: RootState): boolean {
        return this.addingTweetStatusSelector(state) === AddingTweetStatusEnum.LOADING
    },
    isTweetAddingErrorSelector: function (state: RootState): boolean {
        return this.addingTweetStatusSelector(state) === AddingTweetStatusEnum.ERROR
    },
    isTweetAddedSelector: function (state: RootState): boolean {
        return this.addingTweetStatusSelector(state) === AddingTweetStatusEnum.SUCCESS
    }

}
