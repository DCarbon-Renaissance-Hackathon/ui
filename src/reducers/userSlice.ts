import { getListCertificate, getListTransaction, getProfile } from '@/actions/user.action'
import { createSlice } from '@reduxjs/toolkit'

interface Profile {
  id: string
  name: string
  avatar: string
  fund: number
  offset: number
  address: string
  created_time: number
}

export interface TransactionInfo {
  id: string
  amount: number
  type: string
  created_time: number
  tx_signature: string
  from_address: string
  to_address: null
  token: string
  project_id: string
  device_id: string
}

export interface CertificateInfo {
  id: string
  name: string
  amount: number
  project_type: string
  project_location: string
  reason: string
  country: null
  address: null
  is_corporate: false
  created_time: number
  tx_signature: string
}

interface User {
  profile: Profile | undefined
  listCertificates: CertificateInfo[] | undefined
  listTransactions: TransactionInfo[] | undefined
}

const initialState: User = {
  profile: undefined,
  listCertificates: undefined,
  listTransactions: undefined,
}

export const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    setProfile: (state, action) => {
      state.profile = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProfile.fulfilled, (state, action) => {
      state.profile = action.payload
    }),
      builder.addCase(getListCertificate.fulfilled, (state, action) => {
        state.listCertificates = action.payload
      }),
      builder.addCase(getListTransaction.fulfilled, (state, action) => {
        state.listTransactions = action.payload
      })
  },
})

export default userSlice.reducer
export const { setProfile } = userSlice.actions
export const selectProfile = (state: { user: User }) => state.user.profile
export const selectCertificates = (state: { user: User }) => state.user.listCertificates
export const selectTransactions = (state: { user: User }) => state.user.listTransactions
