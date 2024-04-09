import deviceServices from '@/services/deviceServices'
import { createAsyncThunk } from '@reduxjs/toolkit'

export const getListDevice = createAsyncThunk(
  'device/getListDevice',
  async (params: { status: number }, { rejectWithValue }) => {
    try {
      const response = await deviceServices.getListDevice(params)
      return response
    } catch (err) {
      return rejectWithValue(err)
    }
  }
)

export const getDeviceDetail = createAsyncThunk('device/getDeviceDetail', async (id: string, { rejectWithValue }) => {
  try {
    const response = await deviceServices.getDeviceDetail(id)
    return response
  } catch (err) {
    return rejectWithValue(err)
  }
})

export const getAvailableCarbon = createAsyncThunk(
  'device/getAvailableCarbon',
  async (params: { id: string }, { rejectWithValue }) => {
    try {
      const response = await deviceServices.getAvailableCarbon(params)
      return response
    } catch (err) {
      return rejectWithValue(err)
    }
  }
)

export const getProjects = createAsyncThunk('device/getProjects', async (_, { rejectWithValue }) => {
  try {
    const response = await deviceServices.getProjects()
    return response
  } catch (err) {
    return rejectWithValue(err)
  }
})

export const getProjectDetail = createAsyncThunk('device/getProjectDetail', async (id: string, { rejectWithValue }) => {
  try {
    const response = await deviceServices.getProjectDetail(id)
    return response
  } catch (err) {
    return rejectWithValue(err)
  }
})

export const getListProjectDevices = createAsyncThunk(
  'device/getListProjectDevices',
  async (params: { projectId: string; status: string }, { rejectWithValue }) => {
    try {
      const response = await deviceServices.getListProjectDevices(params)
      return response
    } catch (err) {
      return rejectWithValue(err)
    }
  }
)

export const getLogData = createAsyncThunk(
  'device/getLogData',
  async (params: { from: string; to: string; interval: number }, { rejectWithValue }) => {
    try {
      const response = await deviceServices.getLogData(params)
      return response
    } catch (err) {
      return rejectWithValue(err)
    }
  }
)
