import produce, { Draft } from 'immer'
import { InferActionsTypes } from '../../index'
import { Action } from 'redux'
import { UserType } from '../../../api/authApi'
import { LoadingStatusEnum } from '../../types'
import { SignInFormData } from '../../../pages/Sign/SignInModal'

export enum UserActionsType {
    SET_USER_DATA = 'user/SET_USER_DATA',
    SET_LOADING_STATE = 'user/SET_LOADING_STATE',
    FETCH_SIGN_IN = 'user/FETCH_SIGN_IN'
}

export interface SetUserInterface extends Action<UserActionsType> {
    type: UserActionsType.SET_USER_DATA,
    payload: UserType
}

export interface SetLoadingStateInterface extends Action<UserActionsType> {
    type: UserActionsType.SET_LOADING_STATE,
    payload: LoadingStatusEnum
}

export interface FetchSignInInterface extends Action<UserActionsType> {
    type: UserActionsType.FETCH_SIGN_IN,
    payload: SignInFormData
}

export const UserActions = {
    setUser: (user: UserType): SetUserInterface => ({
        type: UserActionsType.SET_USER_DATA,
        payload: user
    } as const),
    setLoadingState: (loadingStatus: LoadingStatusEnum): SetLoadingStateInterface => ({
        type: UserActionsType.SET_LOADING_STATE,
        payload: loadingStatus
    } as const),
    fetchSignIn: (formData: SignInFormData): FetchSignInInterface => ({
        type: UserActionsType.FETCH_SIGN_IN,
        payload: formData
    } as const)
}

const initialState = {
    user: undefined as unknown as UserType,
    loadingStatus: LoadingStatusEnum.NEVER as LoadingStatusEnum
}

export type UserStateType = typeof initialState
type UserActionTypes = InferActionsTypes<typeof UserActions>

export const userReducer = produce((draft: Draft<UserStateType>, action: UserActionTypes) => {

    switch (action.type) {

        case UserActionsType.SET_USER_DATA: {
            draft.user = action.payload
            draft.loadingStatus = LoadingStatusEnum.LOADED
            break
        }

        case UserActionsType.SET_LOADING_STATE: {
            draft.loadingStatus = action.payload
            break
        }

        case UserActionsType.FETCH_SIGN_IN: {
            draft.user = undefined as unknown as UserType
            draft.loadingStatus = LoadingStatusEnum.LOADING
            break
        }

        default:
            break
    }
}, initialState)