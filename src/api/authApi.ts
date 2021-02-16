import { SignInFormData } from '../pages/Sign/SignInModal'
import { axios } from '../core/axios'

export type UserType = {
    _id?: string
    email: string
    fullname: string
    username: string
    password: string
    confirmHash: string
    confirmed?: boolean
    location?: string
    about?: string
    website?: string
    token: string | undefined
}

export type AuthResponseType = {
    status: string,
    data: any
}

export type GetMeResponseType = {
    status: string
    data: UserType
}

export const AuthApi = {
    async signIn(formData: SignInFormData): Promise<AuthResponseType> {
        const { data } = await axios.post<AuthResponseType>('/auth/signin', {
            username: formData.email, password: formData.password
        })
        return data.data
    },
    async getMe(): Promise<GetMeResponseType> {
        const { data } = await axios.get<GetMeResponseType>('/auth/me')
        return data
    }
}




