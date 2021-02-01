import produce, { Draft } from 'immer'
import { TweetType } from '../../../api/tweetsApi'
import { InferActionsTypes } from '../../index'
import { Action } from 'redux'
import { LoadingStatusEnum } from '../../types'

export enum TweetActionsType {
    SET_TWEET = 'tweet/SET_TWEET',
    FETCH_TWEET = 'tweet/FETCH_TWEET',
    SET_LOADING_STATE = 'tweet/SET_LOADING_STATE'
}

export interface SetTweetInterface extends Action<TweetActionsType> {
    type: TweetActionsType.SET_TWEET,
    payload: TweetStateType['tweet']
}

export interface SetLoadingStateInterface extends Action<TweetActionsType> {
    type: TweetActionsType.SET_LOADING_STATE,
    payload: LoadingStatusEnum
}

export interface FetchTweetInterface extends Action<TweetActionsType> {
    type: TweetActionsType.FETCH_TWEET,
    payload: string
}

export const tweetActions = {
    setTweet: (tweet: TweetStateType['tweet']): SetTweetInterface => ({
        type: TweetActionsType.SET_TWEET,
        payload: tweet
    } as const),
    setLoadingState: (loadingStatus: LoadingStatusEnum): SetLoadingStateInterface => ({
        type: TweetActionsType.SET_LOADING_STATE,
        payload: loadingStatus
    } as const),
    fetchTweet: (id: string): FetchTweetInterface => ({
        type: TweetActionsType.FETCH_TWEET,
        payload: id
    })
}

const initialState = {
    tweet: undefined as unknown as TweetType | undefined,
    loadingStatus: LoadingStatusEnum.NEVER as LoadingStatusEnum
}

export type TweetStateType = typeof initialState
type TweetActionTypes = InferActionsTypes<typeof tweetActions>

export const tweetReducer = produce((draft: Draft<TweetStateType>, action: TweetActionTypes) => {

    switch (action.type) {

        case TweetActionsType.SET_TWEET: {
            draft.tweet = action.payload
            draft.loadingStatus = LoadingStatusEnum.LOADED
            break
        }

        case TweetActionsType.FETCH_TWEET: {
            draft.tweet = undefined as unknown as TweetType
            draft.loadingStatus = LoadingStatusEnum.LOADING
            break
        }

        case TweetActionsType.SET_LOADING_STATE: {
            draft.loadingStatus = action.payload
            break
        }

        default:
            break
    }
}, initialState)
