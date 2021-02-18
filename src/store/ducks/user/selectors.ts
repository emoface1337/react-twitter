import { RootState } from '../../index'
import { LoadingStatusEnum } from '../../types'
import { AuthUserType } from '../../../api/authApi'

export const selectUser = (state: RootState): AuthUserType => state.user.user
export const selectIsAuth = (state: RootState): boolean => !!state.user.user

export const selectFetchUserDataLoadingStatus = (state: RootState): LoadingStatusEnum => state.user.fetchUserDataLoadingStatus
export const selectSignInLoadingStatus = (state: RootState): LoadingStatusEnum => state.user.signInLoadingStatus
export const selectSignUpLoadingStatus = (state: RootState): LoadingStatusEnum => state.user.signUpLoadingStatus

export const selectUserIsLoading = (state: RootState): boolean => selectFetchUserDataLoadingStatus(state) === LoadingStatusEnum.LOADING
export const selectUserIsLoaded = (state: RootState): boolean => selectFetchUserDataLoadingStatus(state) === LoadingStatusEnum.LOADED
export const selectUserIsSuccess = (state: RootState): boolean => selectFetchUserDataLoadingStatus(state) === LoadingStatusEnum.SUCCESS
export const selectUserIsError = (state: RootState): boolean => selectFetchUserDataLoadingStatus(state) === LoadingStatusEnum.ERROR

export const selectSignInIsLoading = (state: RootState): boolean => selectSignInLoadingStatus(state) === LoadingStatusEnum.LOADING
export const selectSignInIsLoaded = (state: RootState): boolean => selectSignInLoadingStatus(state) === LoadingStatusEnum.LOADED
export const selectSignInIsSuccess = (state: RootState): boolean => selectSignInLoadingStatus(state) === LoadingStatusEnum.SUCCESS
export const selectSignInIsError = (state: RootState): boolean => selectSignInLoadingStatus(state) === LoadingStatusEnum.ERROR

export const selectSignUpIsLoading = (state: RootState): boolean => selectSignUpLoadingStatus(state) === LoadingStatusEnum.LOADING
export const selectSignUpIsLoaded = (state: RootState): boolean => selectSignUpLoadingStatus(state) === LoadingStatusEnum.LOADED
export const selectSignUpIsSuccess = (state: RootState): boolean => selectSignUpLoadingStatus(state) === LoadingStatusEnum.SUCCESS
export const selectSignUpIsError = (state: RootState): boolean => selectSignUpLoadingStatus(state) === LoadingStatusEnum.ERROR

export const selectErrorMessage = (state: RootState): string | undefined => state.user.error

export const selectSignInError = (state: RootState): boolean => state.user.signInError
export const selectSignUpError = (state: RootState): boolean => state.user.signUpError
