import { RootState } from '../../index'
import { LoadingStatusEnum } from '../../types'
import { AuthUserType } from '../../../api/authApi'

export const selectUser = (state: RootState): AuthUserType => state.user.user
export const selectUserLoadingStatus = (state: RootState): LoadingStatusEnum => state.user.loadingStatus
export const selectIsAuth = (state: RootState): boolean => !!state.user.user