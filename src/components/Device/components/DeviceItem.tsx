import Flag from '@/images/project/flag_vietnam.svg'
import Image from 'next/image'
import { useEffect, useState } from 'react'

import { getProjectDetail } from '@/actions/device.action'
import { useAppDispatch } from '@/hooks/hooks'
import defaultImg from '@/images/project/project_img.png'
import { DeviceDetail, DeviceInfo, setListDevice } from '@/reducers/deviceSlice'
import { clientBaseURL } from '@/services/deviceServices'
import { useRouter } from 'next/navigation'

type DeviceItemProps = {
  device?: DeviceInfo
  listDevicesDetail?: Record<string, DeviceDetail>
}

const DeviceItem = ({ device, listDevicesDetail }: DeviceItemProps) => {
  const [projectInfo, setProjectInfo] = useState<DeviceDetail>()
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (device) {
      if (listDevicesDetail && listDevicesDetail[device?.id]) {
        setProjectInfo(listDevicesDetail[device?.id])
      } else {
        const fetchProjectDetail = async () => {
          const res = await dispatch(getProjectDetail(device?.project))
          if (res) {
            dispatch(setListDevice({ device: device, projectInfo: res?.payload }))
          }
        }
        fetchProjectDetail()
      }
    }
  }, [device, dispatch, listDevicesDetail])

  const router = useRouter()

  return (
    <button
      onClick={async () => {
        if (device && listDevicesDetail) {
          await localStorage.setItem(
            'device',
            JSON.stringify({
              ...listDevicesDetail[device?.id],
            })
          )
        }
        router.push(`/device/${device?.id}`)
      }}
      className='flex w-[426px] flex-col items-start justify-start'
    >
      <div className='relative h-[240px] w-full'>
        <Image
          loader={({ src }) => src}
          src={
            projectInfo?.projectInfo?.images
              ? `${clientBaseURL.split('/api')[0]}${projectInfo?.projectInfo?.images[0]}`
              : defaultImg
          }
          width={426}
          height={240}
          alt={projectInfo?.projectInfo?.descs ? projectInfo?.projectInfo?.descs[0]?.name : ''}
          className='h-full w-full object-cover'
        />
        <div className='absolute bottom-0 left-0 w-full bg-[linear-gradient(180deg,rgba(16,24,40,0.00)_0%,rgba(23,39,71,0.4)_48.4%,rgba(22,29,44,0.60)_100%)] pb-2 pl-[16px] pt-3 '>
          <div className='flex flex-row items-center gap-2'>
            <Image src={Flag} width={32} height={32} alt='leaf' />
            <p className='font-lexend-deca text-sm font-medium leading-[17.5px] tracking-[-0.56px] text-white'>
              Hanoi, Viet Nam
            </p>
          </div>
        </div>
      </div>
      <div className='flex flex-col items-start gap-3 py-4'>
        <div className='flex flex-col items-start gap-1'>
          <h4 className='font-lexend-deca text-base font-medium leading-[18px] tracking-[-0.64px] text-black'>
            IoT device {device?.id}
          </h4>
          <h3 className='text-start font-lexend-deca text-lg font-medium leading-[22.5px] tracking-[-0.72px] text-black'>
            {projectInfo?.projectInfo?.descs ? projectInfo?.projectInfo?.descs[0]?.name : ''}
          </h3>
          <p className='font-lexend-deca text-sm font-medium leading-[17.5px] tracking-[-0.56px] text-[rgba(136,136,136,1)]'>
            {projectInfo?.projectInfo?.descs ? projectInfo?.projectInfo?.descs[0]?.desc : ''}
          </p>
        </div>
        {/* <p className='font-lexend-deca text-base font-medium leading-[20px] tracking-[-0.64px] text-[rgba(129,226,52,1)]'>
          100 Carbon Credit available
        </p> */}
      </div>
    </button>
  )
}

export default DeviceItem
