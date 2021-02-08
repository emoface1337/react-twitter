import produce, { Draft } from 'immer'
import { TweetType } from '../../../api/tweetsApi'
import { InferActionsTypes } from '../../index'
import { Action } from 'redux'
import { LoadingStatusEnum } from '../../types'

export enum TweetsActionsType {
    SET_ITEMS = 'tweets/SET_ITEMS',
    FETCH_ITEMS = 'tweets/FETCH_ITEMS',
    SET_LOADING_STATE = 'tweets/SET_LOADING_STATE',
    ADD_TWEET = 'tweets/ADD_TWEET',
    FETCH_ADDING_TWEET_SUCCESS = 'tweets/FETCH_ADDING_TWEET_SUCCESS',
    SET_ADDING_STATE = 'tweets/SET_ADDING_STATE'
}

export interface SetTweetsInterface extends Action<TweetsActionsType> {
    type: TweetsActionsType.SET_ITEMS,
    payload: TweetsStateType['tweets']
}

export interface SetLoadingStateInterface extends Action<TweetsActionsType> {
    type: TweetsActionsType.SET_LOADING_STATE,
    payload: LoadingStatusEnum
}

export interface FetchTweetsInterface extends Action<TweetsActionsType> {
    type: TweetsActionsType.FETCH_ITEMS
}

export interface AddTweetInterface extends Action<TweetsActionsType> {
    type: TweetsActionsType.ADD_TWEET,
    payload: string
}

export interface FetchAddTweetInterface extends Action<TweetsActionsType> {
    type: TweetsActionsType.FETCH_ADDING_TWEET_SUCCESS,
    payload: TweetType
}

export interface SetAddingTweetStateInterface extends Action<TweetsActionsType> {
    type: TweetsActionsType.SET_ADDING_STATE,
    payload: AddingTweetStatusEnum
}

export const TweetsActions = {
    setTweets: (tweets: TweetsStateType['tweets']): SetTweetsInterface => ({
        type: TweetsActionsType.SET_ITEMS,
        payload: tweets
    } as const),
    setLoadingState: (loadingStatus: LoadingStatusEnum): SetLoadingStateInterface => ({
        type: TweetsActionsType.SET_LOADING_STATE,
        payload: loadingStatus
    } as const),
    fetchTweets: (): FetchTweetsInterface => ({
        type: TweetsActionsType.FETCH_ITEMS
    }),
    addTweet: (text: string): AddTweetInterface => ({
        type: TweetsActionsType.ADD_TWEET,
        payload: text
    } as const),
    fetchAddTweetSuccess: (tweet: TweetType): FetchAddTweetInterface => ({
        type: TweetsActionsType.FETCH_ADDING_TWEET_SUCCESS,
        payload: tweet
    } as const),
    setAddingTweetState: (state: AddingTweetStatusEnum): SetAddingTweetStateInterface => ({
        type: TweetsActionsType.SET_ADDING_STATE,
        payload: state
    })
}

export enum AddingTweetStatusEnum {
    LOADING = 'LOADING',
    ERROR = 'ERROR',
    SUCCESS = 'SUCCESS',
    NEVER = 'NEVER'
}

const initialState = {
    tweets: [] as TweetType[],
    loadingStatus: LoadingStatusEnum.NEVER as LoadingStatusEnum,
    addingTweetStatus: AddingTweetStatusEnum.NEVER as AddingTweetStatusEnum
}

export type TweetsStateType = typeof initialState
type TweetsActionTypes = InferActionsTypes<typeof TweetsActions>

export const tweetsReducer = produce((draft: Draft<TweetsStateType>, action: TweetsActionTypes) => {

    switch (action.type) {

        case TweetsActionsType.SET_ITEMS: {
            draft.tweets = action.payload
            draft.loadingStatus = LoadingStatusEnum.LOADED
            break
        }

        case TweetsActionsType.FETCH_ITEMS: {
            draft.tweets = []
            draft.loadingStatus = LoadingStatusEnum.LOADING
            break
        }

        case TweetsActionsType.SET_LOADING_STATE: {
            draft.loadingStatus = action.payload
            break
        }

        case TweetsActionsType.SET_ADDING_STATE: {
            draft.addingTweetStatus = action.payload
            break
        }

        case TweetsActionsType.FETCH_ADDING_TWEET_SUCCESS: {
            draft.tweets.unshift(action.payload)
            draft.addingTweetStatus = AddingTweetStatusEnum.SUCCESS
            break
        }

        default:
            break
    }
}, initialState)