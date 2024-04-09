'use client'
import Banner from '@/components/Banner/Banner'
import Project from '@/components/Device/Device'
import { useTheme } from '@/context/ThemeContext'
import { useEffect } from 'react'

const Home = () => {
  const { setTheme } = useTheme()
  useEffect(() => {
    setTheme('light')
  }, [setTheme])
  return (
    <div className='relative z-0 mt-[-80px] flex w-full flex-col gap-8'>
      <Banner />
      <Project />
      <div className='absolute right-[-157.57px] top-[808.43px] z-0 hidden h-[427.14px] w-[427.14px] rounded-full bg-[#81E234] opacity-50 blur-[160px] md:block'></div>
      <div className='absolute bottom-[440.36px] left-[-226.14px] h-[306.14px] w-[306.14px] rounded-full bg-[rgba(68,30,255,0.93)] opacity-50 blur-[160px] md:bottom-[-261.64px]'></div>
    </div>
  )
}

export default Home
