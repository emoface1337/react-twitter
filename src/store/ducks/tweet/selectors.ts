import { RootState } from '../../index'
import { LoadingStatusEnum } from './tweet'

export const tweetSelector = (state: RootState) => state.tweet.tweet
export const tweetLoadingStatusSelector = (state: RootState): LoadingStatusEnum => state.tweet.loadingStatus
export const tweetIsLoadingSelector = (state: RootState): boolean => tweetLoadingStatusSelector(state) === LoadingStatusEnum.LOADING
export const tweetIsLoadedSelector = (state: RootState): boolean => tweetLoadingStatusSelector(state) === LoadingStatusEnum.LOADED