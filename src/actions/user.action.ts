import userServices from '@/services/userServices'
import { createAsyncThunk } from '@reduxjs/toolkit'

export const getProfile = createAsyncThunk('user/getProfile', async (_, { rejectWithValue }) => {
  try {
    const response = await userServices.getProfile()
    return response
  } catch (err) {
    return rejectWithValue(err)
  }
})

export const updateProfile = createAsyncThunk(
  'user/updateProfile',
  async (params: { name: string; avatar: string }, { rejectWithValue }) => {
    try {
      const response = await userServices.updateProfile(params)
      return response
    } catch (err) {
      return rejectWithValue(err)
    }
  }
)

export const submitCertificateIndividual = createAsyncThunk(
  'user/submitCertificateIndividual',
  async (
    params: {
      name: string
      amount: number
      project_type: string
      project_location: string
      reason: string
      project_id: string
      device_id: string
    },
    { rejectWithValue }
  ) => {
    try {
      const response = await userServices.submitCertificateIndividual(params)
      return response
    } catch (err) {
      return rejectWithValue(err)
    }
  }
)

export const submitCertificateCorporate = createAsyncThunk(
  'user/submitCertificateCorporate',
  async (
    params: {
      name: string
      amount: number
      project_type: string
      project_location: string
      reason: string
      project_id: string
      device_id: string
      country: string
      address: string
    },
    { rejectWithValue }
  ) => {
    try {
      const response = await userServices.submitCertificateCorporate(params)
      return response
    } catch (err) {
      return rejectWithValue(err)
    }
  }
)

export const getListCertificate = createAsyncThunk('user/getListCertificate', async (_, { rejectWithValue }) => {
  try {
    const response = await userServices.getListCertificate()
    return response
  } catch (err) {
    return rejectWithValue(err)
  }
})

export const getDetailCertificate = createAsyncThunk(
  'user/getDetailCertificate',
  async (params: { id: string }, { rejectWithValue }) => {
    try {
      const response = await userServices.getDetailCertificate(params.id)
      return response
    } catch (err) {
      return rejectWithValue(err)
    }
  }
)

export const getListTransaction = createAsyncThunk('user/getListTransaction', async (_, { rejectWithValue }) => {
  try {
    const response = await userServices.getListTransaction()
    return response
  } catch (err) {
    return rejectWithValue(err)
  }
})

export const getSignature = createAsyncThunk(
  'user/getSignature',
  async (params: { projectId: string; buyerPub: string; amount: number }, { rejectWithValue }) => {
    try {
      const response = await userServices.getSignature(params)
      return response
    } catch (err) {
      return rejectWithValue(err)
    }
  }
)
