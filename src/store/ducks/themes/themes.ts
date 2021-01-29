import produce, { Draft } from 'immer'
import { InferActionsTypes } from '../../index'
import { Action } from 'redux'
import { ThemeType } from '../../../api/themesApi'

export enum ThemesActionsType {
    SET_ITEMS = 'themes/SET_ITEMS',
    FETCH_ITEMS = 'themes/FETCH_ITEMS',
    SET_LOADING_STATE = 'themes/SET_LOADING_STATE'
}

export interface SetThemesInterface extends Action<ThemesActionsType> {
    type: ThemesActionsType.SET_ITEMS,
    payload: ThemesStateType['themes']
}

export interface SetLoadingStateInterface extends Action<ThemesActionsType> {
    type: ThemesActionsType.SET_LOADING_STATE,
    payload: LoadingStatusEnum
}

export interface FetchThemesInterface extends Action<ThemesActionsType> {
    type: ThemesActionsType.FETCH_ITEMS
}

export const themesActions = {
    setThemes: (Themes: ThemesStateType['themes']): SetThemesInterface => ({
        type: ThemesActionsType.SET_ITEMS,
        payload: Themes
    } as const),
    setLoadingState: (loadingStatus: LoadingStatusEnum): SetLoadingStateInterface => ({
        type: ThemesActionsType.SET_LOADING_STATE,
        payload: loadingStatus
    } as const),
    fetchThemes: (): FetchThemesInterface => ({
        type: ThemesActionsType.FETCH_ITEMS
    })
}

export enum LoadingStatusEnum {
    LOADED = 'LOADED',
    LOADING = 'LOADING',
    ERROR = 'ERROR',
    NEVER = 'NEVER'
}

const initialState = {
    themes: [] as ThemeType[],
    loadingStatus: LoadingStatusEnum.NEVER as LoadingStatusEnum
}

export type ThemesStateType = typeof initialState
type ThemesActionTypes = InferActionsTypes<typeof themesActions>

export const themesReducer = produce((draft: Draft<ThemesStateType>, action: ThemesActionTypes) => {

    switch (action.type) {

        case ThemesActionsType.SET_ITEMS: {
            draft.themes = action.payload
            draft.loadingStatus = LoadingStatusEnum.LOADED
            break
        }

        case ThemesActionsType.FETCH_ITEMS: {
            draft.themes = []
            draft.loadingStatus = LoadingStatusEnum.LOADING
            break
        }

        case ThemesActionsType.SET_LOADING_STATE: {
            draft.loadingStatus = action.payload
            break
        }

        default:
            break
    }
}, initialState)
