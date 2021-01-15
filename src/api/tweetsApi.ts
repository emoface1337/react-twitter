import axios from 'axios'
import { TweetsStateType } from '../store/ducks/tweets/tweets'

export type TweetType = {
    id?: string
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
        return await axios.get('/tweets?_sort=id&_order=asc').then(({ data }) => data)
    },
    async fetchTweet(id: string): Promise<TweetType> {
        return await axios.get('/tweets?_id=' + id).then(({ data }) => data)
    },
    async addTweet(tweet: TweetType): Promise<TweetType> {
        return await axios.post('/tweets', tweet).then(({ data }) => data)
    }
}




