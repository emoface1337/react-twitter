import axios from 'axios'
import { TweetsStateType } from '../store/ducks/tweets/tweets'

export type TweetType = {
    _id: string
    text: string
    user: {
        fullname: string
        username: string
        avatarUrl: string
    }
}

export const TweetsApi = {
    async fetchTweets(): Promise<TweetsStateType['tweets']> {
        const { data } = await axios.get('/tweets')
        return data
    },
    async fetchTweet(id: string): Promise<TweetType> {
        const { data } = await axios.get('/tweets?_id=' + id)
        return data
    }
}




