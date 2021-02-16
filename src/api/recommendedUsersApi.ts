import { axios } from '../core/axios'

export type RecommendedUserType = {
    _id?: string
    fullname: string
    username: string
    avatarUrl?: string
}

type GetUsersResponseType = {
    status: string
    data: RecommendedUserType[]
}

export const RecommendedUsersApi = {
    async fetchUsers(): Promise<RecommendedUserType[]> {
        const { data } = await axios.get<GetUsersResponseType>('/users/recommended')
        return data.data
    }
}




