import produce, { Draft } from 'immer'
import { InferActionsTypes } from '../../index'
import { Action } from 'redux'
import { AuthUserType } from '../../../api/authApi'
import { LoadingStatusEnum } from '../../types'
import { SignInFormData } from '../../../pages/Sign/SignInModal'
import { SignUpFormData } from '../../../pages/Sign/SignUpModal'

export enum UserActionsType {
    FETCH_USER_DATA = 'user/FETCH_USER_DATA',
    SET_USER_DATA = 'user/SET_USER_DATA',

    SET_SIGN_IN_LOADING_STATUS = 'user/SET_SIGN_IN_LOADING_STATUS',
    SET_SIGN_UP_LOADING_STATUS = 'user/SET_SIGN_UP_LOADING_STATUS',
    SET_FETCH_USER_DATA_LOADING_STATUS = 'user/SET_FETCH_USER_DATA_LOADING_STATUS',

    FETCH_SIGN_IN = 'user/FETCH_SIGN_IN',
    FETCH_SIGN_UP = 'user/FETCH_SIGN_UP',

    SET_FETCH_ERROR = 'user/SET_FETCH_ERROR',

    SET_SIGN_IN_FETCH_ERROR = 'user/SET_SIGN_IN_FETCH_ERROR',
    SET_SIGN_UP_FETCH_ERROR = 'user/SET_SIGN_UP_FETCH_ERROR'
}

export interface SetSignInFetchError extends Action<UserActionsType> {
    type: UserActionsType.SET_SIGN_IN_FETCH_ERROR
    payload: boolean
}

export interface SetSignUpFetchError extends Action<UserActionsType> {
    type: UserActionsType.SET_SIGN_UP_FETCH_ERROR
    payload: boolean
}

export interface FetchUserDataInterface extends Action<UserActionsType> {
    type: UserActionsType.FETCH_USER_DATA
}

export interface SetUserDataInterface extends Action<UserActionsType> {
    type: UserActionsType.SET_USER_DATA,
    payload: AuthUserType
}

export interface SetFetchUserDataLoadingStatusInterface extends Action<UserActionsType> {
    type: UserActionsType.SET_FETCH_USER_DATA_LOADING_STATUS,
    payload: LoadingStatusEnum
}

export interface SetSignInLoadingStatusInterface extends Action<UserActionsType> {
    type: UserActionsType.SET_SIGN_IN_LOADING_STATUS,
    payload: LoadingStatusEnum
}

export interface SetSignUpLoadingStatusInterface extends Action<UserActionsType> {
    type: UserActionsType.SET_SIGN_UP_LOADING_STATUS,
    payload: LoadingStatusEnum
}

export interface SetFetchErrorInterface extends Action<UserActionsType> {
    type: UserActionsType.SET_FETCH_ERROR,
    payload: string | undefined
}

export interface FetchSignInInterface extends Action<UserActionsType> {
    type: UserActionsType.FETCH_SIGN_IN,
    payload: SignInFormData
}

export interface FetchSignUpInterface extends Action<UserActionsType> {
    type: UserActionsType.FETCH_SIGN_UP,
    payload: SignUpFormData
}

export const UserActions = {

    setSignInFetchError: (error: boolean): SetSignInFetchError => ({
        type: UserActionsType.SET_SIGN_IN_FETCH_ERROR,
        payload: error
    } as const),

    setSignUpFetchError: (error: boolean): SetSignUpFetchError => ({
        type: UserActionsType.SET_SIGN_UP_FETCH_ERROR,
        payload: error
    } as const),

    setUser: (user: AuthUserType): SetUserDataInterface => ({
        type: UserActionsType.SET_USER_DATA,
        payload: user
    } as const),

    setSignInLoadingStatus: (loadingStatus: LoadingStatusEnum): SetSignInLoadingStatusInterface => ({
        type: UserActionsType.SET_SIGN_IN_LOADING_STATUS,
        payload: loadingStatus
    } as const),

    setSignUpLoadingStatus: (loadingStatus: LoadingStatusEnum): SetSignUpLoadingStatusInterface => ({
        type: UserActionsType.SET_SIGN_UP_LOADING_STATUS,
        payload: loadingStatus
    } as const),

    setFetchUserDataLoadingStatus: (loadingStatus: LoadingStatusEnum): SetFetchUserDataLoadingStatusInterface => ({
        type: UserActionsType.SET_FETCH_USER_DATA_LOADING_STATUS,
        payload: loadingStatus
    } as const),

    setFetchError: (error: string | undefined): SetFetchErrorInterface => ({
        type: UserActionsType.SET_FETCH_ERROR,
        payload: error
    } as const),

    fetchSignIn: (formData: SignInFormData): FetchSignInInterface => ({
        type: UserActionsType.FETCH_SIGN_IN,
        payload: formData
    } as const),

    fetchSignUp: (formData: SignUpFormData): FetchSignUpInterface => ({
        type: UserActionsType.FETCH_SIGN_UP,
        payload: formData
    } as const),

    fetchUserData: (): FetchUserDataInterface => ({
        type: UserActionsType.FETCH_USER_DATA
    } as const)
}

const initialState = {
    user: undefined as unknown as AuthUserType,
    fetchUserDataLoadingStatus: LoadingStatusEnum.NEVER,
    signInLoadingStatus: LoadingStatusEnum.NEVER,
    signUpLoadingStatus: LoadingStatusEnum.NEVER,
    error: '' as string | undefined,
    signInError: false,
    signUpError: false
}

export type UserStateType = typeof initialState
type UserActionTypes = InferActionsTypes<typeof UserActions>

export const userReducer = produce((draft: Draft<UserStateType>, action: UserActionTypes) => {

    switch (action.type) {

        case UserActionsType.SET_SIGN_IN_FETCH_ERROR: {
            draft.signInError = action.payload
            break
        }

        case UserActionsType.SET_SIGN_UP_FETCH_ERROR: {
            draft.signUpError = action.payload
            break
        }

        case UserActionsType.SET_USER_DATA: {
            draft.user = action.payload
            draft.error = undefined
            break
        }

        case UserActionsType.SET_FETCH_USER_DATA_LOADING_STATUS: {
            draft.fetchUserDataLoadingStatus = action.payload
            break
        }

        case UserActionsType.SET_SIGN_IN_LOADING_STATUS: {
            draft.signInLoadingStatus = action.payload
            break
        }

         case UserActionsType.SET_SIGN_UP_LOADING_STATUS: {
            draft.signUpLoadingStatus = action.payload
            break
        }

        case UserActionsType.SET_FETCH_ERROR: {
            draft.error = action.payload
            break
        }

        case UserActionsType.FETCH_SIGN_IN: {
            draft.user = undefined as unknown as AuthUserType
            break
        }

        case UserActionsType.FETCH_SIGN_UP: {
            draft.user = undefined as unknown as AuthUserType
            break
        }

        default:
            break
    }
}, initialState)