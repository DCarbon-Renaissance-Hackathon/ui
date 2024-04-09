import { getListDevice } from '@/actions/device.action'
import { createSlice } from '@reduxjs/toolkit'

export interface DeviceInfo {
  id: string
  project: string
  address: string
  type: number
  status: number
  position: { latitude: number; longitude: number }
}

type Desc = {
  name: string
  desc: string
}
export interface ProjectDetail {
  id: string
  owner: string
  location: {
    latitude: number
    longitude: number
  }
  status: number
  ca: string
  ua: string
  images: string[]
  descs: Desc[]
  area: number
  address: string
}

export interface DeviceDetail {
  device: DeviceInfo
  projectInfo: ProjectDetail
}

interface Device {
  devices: DeviceInfo[] | undefined
  listDevicesDetail: Record<string, DeviceDetail>
  // projects: ProjectDetail[] | undefined
}

const initialState: Device = {
  devices: undefined,
  listDevicesDetail: {},
  // projects: undefined,
}

export const deviceSlice = createSlice({
  name: 'device',
  initialState: initialState,
  reducers: {
    setListDevice: (state, action) => {
      state.listDevicesDetail[action.payload.device.id] = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getListDevice.fulfilled, (state, action) => {
      state.devices = action.payload.data
    })
    // builder.addCase(getProjects.fulfilled, (state, action) => {
    //   state.projects = action.payload
    // })
  },
})

export default deviceSlice.reducer
export const { setListDevice } = deviceSlice.actions
export const selectListDevices = (state: { device: Device }) => state.device.devices
export const selectListDevicesDetail = (state: { device: Device }) => state.device.listDevicesDetail
// export const selectListProjects = (state: { device: Device }) => state.device.projects
