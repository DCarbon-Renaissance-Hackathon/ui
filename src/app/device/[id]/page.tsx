'use client'
import ProjectDescription from '@/components/ProjectDetail/ProjectDescription'
import ProjectImageSlider from '@/components/ProjectDetail/ProjectImageSlider'
import ProjectOffset from '@/components/ProjectDetail/ProjectOffset'
import ProjectOverview from '@/components/ProjectDetail/ProjectOverview'
import { useAppSelector } from '@/hooks/hooks'

import { DeviceDetail, selectListDevicesDetail } from '@/reducers/deviceSlice'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'

const TabList = [
  {
    title: 'Overview',
  },
  {
    title: 'Description',
  },
]
export default function ProjectDetailID() {
  const listDevicesDetail = useAppSelector(selectListDevicesDetail)
  const [activeTab, setActiveTab] = useState(0)
  const [deviceInfo, setDeviceInfo] = useState<DeviceDetail>()
  const param = useParams()

  useEffect(() => {
    if (Object.keys(listDevicesDetail).length > 0) {
      setDeviceInfo(listDevicesDetail[param?.id as string])
    } else {
      const res = localStorage.getItem('device')
      if (res) {
        setDeviceInfo(JSON.parse(res))
      }
    }
  }, [listDevicesDetail, param?.id])
  // const [projectInfo, setProjectInfo] = useState<ProjectDetail>()

  // useEffect(() => {
  //   const fetchDeviceDetail = async () => {
  //     const res = await projectService.getDeviceDetail(param?.id as string)
  //     if (res) {
  //       setDeviceInfo(res)
  //     }
  //   }
  //   fetchDeviceDetail()
  // }, [param])

  // useEffect(() => {
  //   if (deviceInfo) {
  //     const fetchProjectDetail = async () => {
  //       const res = await projectService.getProjectDetail(deviceInfo?.project as string)
  //       if (res) {
  //         setProjectInfo(res)
  //       }
  //     }
  //     fetchProjectDetail()
  //   }
  // }, [deviceInfo])

  return (
    <main className='mt-[-80px] flex w-full flex-col items-center justify-center gap-8 font-lexend-deca'>
      <section className='flex items-center self-stretch'>
        <ProjectImageSlider deviceInfo={deviceInfo} />
      </section>
      <section className='flex items-start justify-between gap-8 self-stretch px-10 max-md:flex-col max-md:px-4'>
        <div className='flex w-full flex-col items-start justify-center gap-8'>
          <div className='flex items-center '>
            {TabList.map((item, index: number) => {
              return (
                <button
                  onClick={() => setActiveTab(index)}
                  className={`border-b px-6 py-2  ${activeTab == index ? 'border-[#81E234]  text-[#1C2916]' : 'border-transparent text-[#888888]'}`}
                  key={index}
                >
                  {item.title}
                </button>
              )
            })}
          </div>
          {activeTab == 0 ? (
            <ProjectOverview deviceInfo={deviceInfo} />
          ) : (
            <ProjectDescription deviceInfo={deviceInfo} />
          )}
        </div>
        <ProjectOffset deviceInfo={deviceInfo} />
      </section>
      <div className='h-full w-full rounded-[32px] px-[40px] max-sm:px-0'>
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d7424.204469946746!2d105.0161168638482!3d21.503715125949732!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjHCsDMwJzE1LjMiTiAxMDXCsDAwJzU4LjYiRQ!5e0!3m2!1svi!2s!4v1712396879073!5m2!1svi!2s'
          height='450'
          width={'100%'}
          loading='lazy'
          referrerPolicy='no-referrer-when-downgrade'
          className=' rounded-[32px]'
        ></iframe>
      </div>
    </main>
  )
}
