import { RootState } from '../../index'
import { UserStateType } from './user'
import { LoadingStatusEnum } from '../../types'

export const selectUser = (state: RootState): UserStateType => state.user
export const selectUserLoadingStatus = (state: RootState): LoadingStatusEnum => state.user.loadingStatus