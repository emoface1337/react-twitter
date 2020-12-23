import { RootState } from '../../index'
import { LoadingStatusEnum } from './tweets'

export const tweetsSelector = (state: RootState) => state.tweets.tweets
export const tweetsLoadingStatusSelector = (state: RootState): LoadingStatusEnum => state.tweets.loadingStatus
export const tweetsIsLoadingSelector = (state: RootState): boolean => tweetsLoadingStatusSelector(state) === LoadingStatusEnum.LOADING
export const tweetsIsLoadedSelector = (state: RootState): boolean => tweetsLoadingStatusSelector(state) === LoadingStatusEnum.LOADED