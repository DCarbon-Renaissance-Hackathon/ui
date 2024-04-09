import axiosClient from './axiosClient'
import { SIGN, SIGN_IN } from './endpoint'

const authService = {
  sign: async () => {
    const response = await axiosClient.get(SIGN)
    return response
  },
  signIn: async (bodyParams: { signature: string; address: string; nonce: 'string' }) => {
    const response = await axiosClient.post(SIGN_IN, bodyParams)
    return response
  },
}

export default authService
