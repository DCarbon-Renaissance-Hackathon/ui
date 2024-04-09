import axios from 'axios'
import {
  GET_CARBON_AVAILABLE,
  GET_DEVICE_DETAIL,
  GET_LIST_DEVICE,
  GET_LIST_PROJECT,
  GET_LIST_PROJECT_DEVICE,
  GET_LOG_DATA,
  GET_PROJECT_DETAIL,
} from './endpoint'

export const clientBaseURL = process.env.NEXT_PUBLIC_HOST || 'https://testnet.dcarbon.org/api'

const axiosService = axios.create({
  baseURL: clientBaseURL,
  headers: {
    'Content-Type': 'application/json',
  },
})

const projectService = {
  getListDevice: async (params: { status: number }) => {
    const response = await axiosService.get(GET_LIST_DEVICE, { params })
    return response.data
  },
  getDeviceDetail: async (id: string) => {
    const response = await axiosService.get(`${GET_DEVICE_DETAIL}/${id}`)
    return response.data
  },
  getAvailableCarbon: async (params: { id: string }) => {
    const response = await axiosService.get(`${GET_CARBON_AVAILABLE}/${params.id}/latest`)
    return response.data
  },
  getProjects: async () => {
    const response = await axiosService.get(GET_LIST_PROJECT)
    return response.data
  },
  getProjectDetail: async (id: string) => {
    const response = await axiosService.get(`${GET_PROJECT_DETAIL}/${id}`)
    return response.data
  },
  getListProjectDevices: async (params: { projectId: string; status: string }) => {
    const response = await axiosService.get(GET_LIST_PROJECT_DEVICE, { params })
    return response.data
  },
  getLogData: async (params: { from: string; to: string; interval: number }) => {
    const response = await axiosService.get(GET_LOG_DATA, { params })
    return response.data
  },
}

export default projectService
