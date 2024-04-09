import { LocalStorage } from '@/utils/LocalStorage'
import axios from 'axios'

const baseURL: string = 'https://dcarbon.vertiree.com/api/'

const axiosClient = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
})

axiosClient.interceptors.request.use(
  (config) => {
    const token = LocalStorage.getAccessToken()
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default axiosClient
