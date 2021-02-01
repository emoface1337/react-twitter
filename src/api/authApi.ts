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

export type SingInDataResponseType = {
    status: string,
    data: any
}

export const AuthApi = {
    async signIn(formData: SignInFormData): Promise<SingInDataResponseType> {
        const { data } = await axios.post<SingInDataResponseType>('/auth/signin', {
            username: formData.email, password: formData.password
        })
        return data.data
    }
}




