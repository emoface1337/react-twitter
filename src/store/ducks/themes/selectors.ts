import { RootState } from '../../index'
import { LoadingStatusEnum } from '../../types'

export const themesSelector = (state: RootState) => state.themes.themes
export const themesLoadingStatusSelector = (state: RootState): LoadingStatusEnum => state.themes.loadingStatus
export const themesIsLoadingSelector = (state: RootState): boolean => themesLoadingStatusSelector(state) === LoadingStatusEnum.LOADING
export const themesIsLoadedSelector = (state: RootState): boolean => themesLoadingStatusSelector(state) === LoadingStatusEnum.LOADED