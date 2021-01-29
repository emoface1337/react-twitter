import axios, { AxiosRequestConfig } from 'axios'

axios.interceptors.request.use((config: AxiosRequestConfig): AxiosRequestConfig | Promise<AxiosRequestConfig> => {
    config.headers['token'] = window.localStorage.getItem('token')
    return config
})

export { axios }