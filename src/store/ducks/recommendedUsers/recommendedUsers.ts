import produce, { Draft } from 'immer'
import { InferActionsTypes } from '../../index'
import { Action } from 'redux'
import { LoadingStatusEnum } from '../../types'
import { RecommendedUserType } from '../../../api/recommendedUsersApi'

export enum RecommendedUsersActionTypes {
    SET_ITEMS = 'rec_users/SET_ITEMS',
    FETCH_ITEMS = 'rec_users/FETCH_ITEMS',
    SET_LOADING_STATE = 'rec_users/SET_LOADING_STATE'
}

export interface SetUsersInterface extends Action<RecommendedUsersActionTypes> {
    type: RecommendedUsersActionTypes.SET_ITEMS,
    payload: RecommendedUsersStateType['users']
}

export interface SetLoadingStateInterface extends Action<RecommendedUsersActionTypes> {
    type: RecommendedUsersActionTypes.SET_LOADING_STATE,
    payload: LoadingStatusEnum
}

export interface FetchUsersInterface extends Action<RecommendedUsersActionTypes> {
    type: RecommendedUsersActionTypes.FETCH_ITEMS
}

export const RecommendedUsersActions = {
    setUsers: (Users: RecommendedUsersStateType['users']): SetUsersInterface => ({
        type: RecommendedUsersActionTypes.SET_ITEMS,
        payload: Users
    } as const),
    setLoadingState: (loadingStatus: LoadingStatusEnum): SetLoadingStateInterface => ({
        type: RecommendedUsersActionTypes.SET_LOADING_STATE,
        payload: loadingStatus
    } as const),
    fetchUsers: (): FetchUsersInterface => ({
        type: RecommendedUsersActionTypes.FETCH_ITEMS
    })
}

const initialState = {
    users: [] as RecommendedUserType[],
    loadingStatus: LoadingStatusEnum.NEVER as LoadingStatusEnum
}

export type RecommendedUsersStateType = typeof initialState
type RecommendedUsersActionsTypes = InferActionsTypes<typeof RecommendedUsersActions>

export const recommendedUsersReducer = produce((draft: Draft<RecommendedUsersStateType>, action: RecommendedUsersActionsTypes) => {

    switch (action.type) {

        case RecommendedUsersActionTypes.SET_ITEMS: {
            draft.users = action.payload
            draft.loadingStatus = LoadingStatusEnum.LOADED
            break
        }

        case RecommendedUsersActionTypes.FETCH_ITEMS: {
            draft.users = []
            draft.loadingStatus = LoadingStatusEnum.LOADING
            break
        }

        case RecommendedUsersActionTypes.SET_LOADING_STATE: {
            draft.loadingStatus = action.payload
            break
        }

        default:
            break
    }
}, initialState)
