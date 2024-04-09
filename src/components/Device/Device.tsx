import { getListDevice } from '@/actions/device.action'
import { useAppDispatch, useAppSelector } from '@/hooks/hooks'
import { DeviceInfo, selectListDevices, selectListDevicesDetail } from '@/reducers/deviceSlice'
import { useEffect, useState } from 'react'
import DeviceHeading from './components/DeviceHeading'
import DeviceList from './components/DeviceList'

const Device = () => {
  const listDevices = useAppSelector(selectListDevices)
  const listDevicesDetail = useAppSelector(selectListDevicesDetail)
  const [filterListDevices, setFilterListDevices] = useState<DeviceInfo[] | undefined>([])
  const [searchValue, setSearchValue] = useState('')

  const dispatch = useAppDispatch()
  useEffect(() => {
    const fetchListDevice = async () => {
      if (!listDevices) {
        await dispatch(
          getListDevice({
            status: 10,
          })
        )
      }
    }
    fetchListDevice()
  }, [listDevices, dispatch])

  useEffect(() => {
    if (searchValue === '') {
      setFilterListDevices(listDevices || [])
      return
    } else {
      const filterDevices = listDevices?.filter((device: DeviceInfo) => {
        return listDevicesDetail[device.id]?.projectInfo?.descs[0]?.name
          .toLowerCase()
          .includes(searchValue.toLowerCase())
      })
      setFilterListDevices(filterDevices)
    }
  }, [listDevices, listDevicesDetail, searchValue])

  return (
    <div className='relative z-10 mx-auto flex w-full max-w-[1440px] flex-col gap-8'>
      <DeviceHeading setSearchValue={setSearchValue} />
      <DeviceList listDevices={filterListDevices} listDevicesDetail={listDevicesDetail} />
    </div>
  )
}

export default Device
