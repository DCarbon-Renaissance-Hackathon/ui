import { DeviceDetail } from '@/reducers/deviceSlice'
import { formatDateToShowUI } from '@/utils/format'
import axios from 'axios'
import { useEffect, useState } from 'react'
import LineChart from './Chart/LineChart'

type DeviceProps = {
  deviceInfo?: DeviceDetail
}

const ProjectOverview = ({ deviceInfo }: DeviceProps) => {
  const [valuesLineChart, SetValuesLineChart] = useState()
  const [labelLineChart, SetLabelLineChart] = useState()

  const fetchChartData = async () => {
    // Get the current date and time
    const currentDate = new Date()

    // Get the date and time for 7 days ago
    const sevenDaysAgo = new Date()
    sevenDaysAgo.setDate(currentDate.getDate() - 7)

    try {
      const res = await axios.get('https://dev.dcarbon.org/api/v1/iots/290/minted', {
        params: {
          from: 1710921525,
          to: 1712390509,
          interval: 1,
        },
      })
      if (res.data) {
        const values = res.data?.map((obj: { carbon: number }) => obj.carbon)
        SetValuesLineChart(values)
        const label = res.data?.map((obj: { createdAt: string }) => formatDateToShowUI(obj.createdAt))
        SetLabelLineChart(label)
      }
    } catch (error) {
      console.error('Error fetching chart data:', error)
    }
  }
  useEffect(() => {
    fetchChartData()
  }, [deviceInfo?.device?.id])

  return (
    <div className='flex w-full flex-col items-start justify-center gap-4 font-lexend-deca'>
      <section className='flex flex-col items-start gap-4 self-stretch'>
        <p className='text-[18px] font-[500] text-black'>Deice Information</p>
        <div className='flex flex-col items-center justify-start gap-3 self-stretch rounded-2xl bg-[#F3F6F0] p-8 text-[14px] max-sm:p-4'>
          <div className=' flex w-full items-center justify-between gap-8 bg-transparent text-start'>
            <span className='w-[180px]'>Type</span>
            <span>{deviceInfo?.device?.type}</span>
          </div>
          <div className=' text-between flex w-full items-center justify-between gap-8 bg-transparent'>
            <span className='w-[180px]'>Address</span>
            <span>{`${deviceInfo?.device?.address.substring(0, 6)}...${deviceInfo?.device?.address.substring(deviceInfo?.device?.address.length - 4)}`}</span>
          </div>
          <div className=' text-between flex w-full items-center justify-between gap-8 bg-transparent'>
            <span className='w-[180px]'>Implemented Date</span>
            <span>{deviceInfo?.device?.type}</span>
          </div>
          <div className=' flex w-full items-center justify-between gap-8 bg-transparent text-start'>
            <span className='w-[180px]'>Public Key</span>
            <span>{`${deviceInfo?.device?.address.substring(0, 6)}...${deviceInfo?.device?.address.substring(deviceInfo?.device?.address.length - 4)}`}</span>
          </div>
        </div>
      </section>
      <section className='flex flex-col items-start gap-4 self-stretch'>
        <p className='text-[18px] font-[500] text-black'>Carbon Generated</p>
        <div className='flex h-full w-full items-center justify-center rounded-lg border border-[#E3E9DE] p-4'>
          {labelLineChart && valuesLineChart && <LineChart labels={labelLineChart} values={valuesLineChart} />}
        </div>
      </section>
      <section className='relative flex w-full items-center justify-between overflow-hidden rounded-lg bg-[#DEFBD9] p-4 font-[500] text-[#000]'>
        <p className='z-[2] text-[18px]'>Max Capacity</p>
        <p className='z-[2] text-[16px]'>123,500 USDC</p>
        <div className=' top-[ -141.653px] absolute right-[-49.71px] z-[1] h-[259.626px] w-[259.626px] rounded-full bg-[#EFFCED]'></div>
        <div className=' absolute left-0 z-[1] h-[163.96px] w-[163.96px] rounded-full bg-[#C7EAC2]'></div>
      </section>
    </div>
  )
}

export default ProjectOverview
