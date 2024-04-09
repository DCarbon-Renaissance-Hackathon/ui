import axiosClient from './axiosClient'
import {
  GET_CERTIFICATE_OF_USER,
  GET_DETAIL_CERTIFICATE,
  GET_LIST_TRANSACTION,
  GET_PROFILE,
  GET_SIGNATURE,
  SUBMIT_CERTIFICATE_CORPORATE,
  SUBMIT_CERTIFICATE_INDIVIDUAL,
  UPDATE_PROFILE,
} from './endpoint'

const userService = {
  getProfile: async () => {
    const response = await axiosClient.get(GET_PROFILE)
    return response.data
  },
  updateProfile: async (bodyParams: { name: string; avatar: string }) => {
    const response = await axiosClient.put(UPDATE_PROFILE, bodyParams)
    return response.data
  },
  submitCertificateIndividual: async (bodyParams: {
    name: string
    amount: number
    project_type: string
    project_location: string
    reason: string
    project_id: string
    device_id: string
  }) => {
    const response = await axiosClient.post(SUBMIT_CERTIFICATE_INDIVIDUAL, bodyParams)
    return response.data
  },
  submitCertificateCorporate: async (bodyParams: {
    name: string
    amount: number
    project_type: string
    project_location: string
    reason: string
    project_id: string
    device_id: string
    country: string
    address: string
  }) => {
    const response = await axiosClient.post(SUBMIT_CERTIFICATE_CORPORATE, bodyParams)
    return response.data
  },
  getListCertificate: async () => {
    const response = await axiosClient.get(GET_CERTIFICATE_OF_USER)
    return response.data
  },
  getDetailCertificate: async (id: string) => {
    const response = await axiosClient.get(`${GET_DETAIL_CERTIFICATE}/${id}`)
    return response.data
  },
  getListTransaction: async () => {
    const response = await axiosClient.get(GET_LIST_TRANSACTION)
    return response.data
  },
  getSignature: async (params: { projectId: string; buyerPub: string; amount: number }) => {
    const response = await axiosClient.get(GET_SIGNATURE, { params })
    return response.data
  },
}

export default userService
