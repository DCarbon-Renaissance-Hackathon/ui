import { DeviceDetail, DeviceInfo } from '@/reducers/deviceSlice'
import DeviceItem from './DeviceItem'

// interface Project {
//   id: string
//   owner: string
//   location: {
//     latitude: number
//     longitude: number
//   }
//   status: number
//   ca: string
//   ua: string
//   area: number
// }

type DeviceListProps = {
  listDevicesDetail?: Record<string, DeviceDetail>
  listDevices?: DeviceInfo[]
}

const DeviceList = ({ listDevices, listDevicesDetail }: DeviceListProps) => {
  return (
    <div className='flex flex-row flex-wrap items-start justify-start gap-6 px-5 md:pl-20 md:pr-0'>
      {listDevices?.map((device: DeviceInfo) => (
        <DeviceItem key={device?.id} device={device} listDevicesDetail={listDevicesDetail} />
      ))}
    </div>
  )
}

export default DeviceList
