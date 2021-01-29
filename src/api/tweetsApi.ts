import { axios } from '../core/axios'

export type TweetType = {
    id?: string
    _id: string
    text: string
    user: {
        fullname: string
        username: string
        avatarUrl: string
    }
    createdAt: string
}

type Response<T> = {
    status: 'success' | 'error'
    data: T
}

export const TweetsApi = {
    async fetchTweets(): Promise<TweetType[]> {
        const { data } = await axios.get<Response<TweetType[]>>('/tweets')
        return data.data
    },
    async fetchTweet(id: string): Promise<TweetType> {
        const { data } = await axios.get<Response<TweetType>>('/tweets/' + id)
        return data.data
    },
    async addTweet(text: string): Promise<TweetType> {
        const { data } = await axios.post<Response<TweetType>>('/tweets', { text })
        return data.data
    }
}




