import { RootState } from '../../index'
import { LoadingStatusEnum } from '../../types'

export const usersSelector = (state: RootState) => state.recommendedUsers.users
export const usersLoadingStatusSelector = (state: RootState): LoadingStatusEnum => state.recommendedUsers.loadingStatus
// export const usersIsLoadingSelector = (state: RootState): boolean => usersLoadingStatusSelector(state) === LoadingStatusEnum.LOADING
export const usersIsLoadedSelector = (state: RootState): boolean => usersLoadingStatusSelector(state) === LoadingStatusEnum.LOADED