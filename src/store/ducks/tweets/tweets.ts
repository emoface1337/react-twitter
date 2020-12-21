import produce, { Draft } from 'immer'
import { TweetType } from '../../../api/tweetsApi'
import { InferActionsTypes } from '../index'
import { Action } from 'redux'

export enum TweetsActionsType {
    SET_TWEETS = 'tweets/SET_TWEETS',
    FETCH_TWEETS = 'tweets/FETCH_TWEETS',
    SET_LOADING_STATE = 'SET_LOADING_STATE'
}

export interface SetTweetsInterface extends Action<TweetsActionsType> {
    type: TweetsActionsType.SET_TWEETS,
    payload: TweetsStateType['tweets']
}

export interface SetLoadingStateInterface extends Action<TweetsActionsType> {
    type: TweetsActionsType.SET_LOADING_STATE,
    payload: LoadingStatusEnum
}

export interface FetchTweetsInterface extends Action<TweetsActionsType> {
    type: TweetsActionsType.FETCH_TWEETS
}

export const tweetsActions = {
    setTweets: (tweets: TweetsStateType['tweets']): SetTweetsInterface => ({
        type: TweetsActionsType.SET_TWEETS,
        payload: tweets
    } as const),
    setLoadingState: (loadingStatus: LoadingStatusEnum): SetLoadingStateInterface => ({
        type: TweetsActionsType.SET_LOADING_STATE,
        payload: loadingStatus
    } as const),
    fetchTweets: (): FetchTweetsInterface => ({
        type: TweetsActionsType.FETCH_TWEETS
    })
}

export enum LoadingStatusEnum {
    LOADED = 'LOADED',
    LOADING = 'LOADING',
    ERROR = 'ERROR',
    NEVER = 'NEVER'
}

const initialState = {
    tweets: [] as TweetType[],
    loadingStatus: LoadingStatusEnum.NEVER as LoadingStatusEnum
}

export type TweetsStateType = typeof initialState
type TweetsActionTypes = InferActionsTypes<typeof tweetsActions>

export const tweetsReducer = produce((draft: Draft<TweetsStateType>, action: TweetsActionTypes) => {

    switch (action.type) {
        case TweetsActionsType.SET_TWEETS: {
            draft.tweets = action.payload
            draft.loadingStatus = LoadingStatusEnum.LOADED
            break
        }
        case TweetsActionsType.FETCH_TWEETS: {
            draft.tweets = []
            draft.loadingStatus = LoadingStatusEnum.LOADING
            break
        }
        case TweetsActionsType.SET_LOADING_STATE: {
            draft.loadingStatus = action.payload
            break
        }
        default:
            break
    }
}, initialState)
