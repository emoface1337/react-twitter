import axios from 'axios'
import { ThemesStateType } from '../store/ducks/themes/themes'

export type ThemeType = {
    _id: string
    name: string
    count: number
}

export const ThemesApi = {
    async fetchThemes(): Promise<ThemesStateType['themes']> {
        const { data } = await axios.get('/themes')
        return data
    }
}




