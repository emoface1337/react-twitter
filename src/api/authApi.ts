import { SignInFormData } from '../pages/Sign/SignInModal'
import { axios } from '../core/axios'
import { SignUpFormData } from '../pages/Sign/SignUpModal'

export type AuthUserType = {
    _id?: string
    email: string
    fullname: string
    username: string
    password?: string
    confirmHash?: string
    confirmed?: boolean
    location?: string
    about?: string
    website?: string
    token?: string | undefined
    avatarUrl?: string
}

export type AuthResponseType = {
    status: string,
    data: any
}

export type GetMeResponseType = {
    status: string
    data: AuthUserType
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
    },
    async signUp(formData: SignUpFormData): Promise<AuthResponseType> {
        const { data } = await axios.post<AuthResponseType>('/auth/signup', {
            username: formData.username, password: formData.password, fullname: formData.fullname,
            email: formData.email, password2: formData.password2
        })
        return data
    }
}




