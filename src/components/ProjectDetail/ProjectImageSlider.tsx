/* eslint-disable @next/next/no-img-element */
import icon_arrow from '@/images/projectdetail/arrow left.png'
import img_avatar from '@/images/projectdetail/avatar.png'
import icon_verfied from '@/images/projectdetail/verified.svg'
import { DeviceDetail } from '@/reducers/deviceSlice'
import { clientBaseURL } from '@/services/deviceServices'
import Image from 'next/image'
//Swiper
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
const NextButton = () => {
  const swiper = useSwiper()
  return (
    <button
      onClick={() => swiper.slideNext()}
      style={{ boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.15)' }}
      className={`flex size-[64px] items-center justify-center rounded-full bg-[rgba(255,255,255,0.25)] backdrop-blur-[8px]`}
    >
      <Image src={icon_arrow} alt='arrow' width={48} height={48} className='rotate-180 mix-blend-color-dodge' />
    </button>
  )
}

const PrevButton = () => {
  const swiper = useSwiper()
  return (
    <button
      onClick={() => swiper.slidePrev()}
      style={{ boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.15)' }}
      className={`flex size-[64px] items-center justify-center rounded-full bg-[rgba(255,255,255,0.25)] backdrop-blur-[8px]`}
    >
      <Image src={icon_arrow} alt='arrow' width={48} height={48} className='mix-blend-color-dodge' />
    </button>
  )
}
type Props = {
  deviceInfo?: DeviceDetail
}
export default function ProjectImageSlider({ deviceInfo }: Props) {
  return (
    <main className='relative h-full w-full bg-black'>
      <div className='relative h-full w-full'>
        <Swiper
          loop={true}
          pagination={true}
          modules={[Pagination]}
          className='mySwiper h-full max-h-[560px] max-sm:max-h-[634px]'
        >
          {deviceInfo &&
            deviceInfo?.projectInfo?.images?.map((item, index: number) => {
              return (
                <SwiperSlide key={index} className='w-full max-sm:h-[634px]'>
                  <Image
                    loader={({ src }) => src}
                    src={` ${clientBaseURL.split('/api')[0]}${item}`}
                    alt='img_project'
                    className='h-full max-w-none object-cover object-center md:w-full'
                    height={556}
                    width={1440}
                  />
                </SwiperSlide>
              )
            })}
          <div className='absolute inset-0 z-[10] flex items-center justify-between px-[40px] max-sm:hidden max-sm:px-4'>
            <PrevButton />
            <NextButton />
          </div>
        </Swiper>
      </div>

      <section className=' absolute bottom-0 z-[10] flex flex-col items-center justify-end'>
        <div className='flex w-full justify-between self-start px-20 py-12 max-sm:px-4'>
          <div className='flex items-center gap-8 max-sm:gap-6'>
            <Image src={img_avatar} alt='' className=' size-[96px] rounded-full object-cover max-sm:size-[64px]' />

            <div className='flex flex-col items-start gap-1'>
              <div className='flex items-center gap-3 font-space-grotesk text-white'>
                <p className='text-[32px] max-sm:text-[24px]'>Froenberg Jungle</p>
                <Image src={icon_verfied} alt='icon' />
              </div>
              <p className='font-lexend-deca text-[#CFD5CA]'>Lumberjack Tim</p>
            </div>
          </div>
          <div className='flex items-end'></div>
        </div>
      </section>
    </main>
  )
}
