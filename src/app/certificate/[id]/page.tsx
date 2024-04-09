'use client'

import userService from '@/services/userServices'
import { addressWalletCompact } from '@/utils/format'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import contentBg from '../../../../public/images/certificate/content-review-bg.png'
import wholeBg from '../../../../public/images/certificate/review-bg.png'
import logo from '../../../../public/images/footer/footer_logo.png'

interface ICornor {
  position: 'top-left' | 'top-right' | 'bot-left' | 'bot-right'
}

const Cornor = ({ position }: ICornor) => {
  const positionClass = (position: string) => {
    switch (position) {
      case 'top-left':
        return 'top-6 left-4'
      case 'top-right':
        return 'top-6 right-4 rotate-90'
      case 'bot-left':
        return 'bottom-6 left-4 -rotate-90'
      default:
        return 'bottom-6 right-4 rotate-180'
    }
  }

  return (
    <div
      className={`absolute size-8 border-l-2 border-t-2 border-[#979E91] md:size-11 md:border-l-[3px] md:border-t-[3px] ${positionClass(position)}`}
    />
  )
}

interface IReviewCertificate {
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

const ReviewCertificate = () => {
  const params = useParams()

  const [certificateInfo, setCertificateInfo] = useState<IReviewCertificate>({
    id: '',
    name: '',
    amount: 0,
    project_type: '',
    project_location: '',
    reason: '',
    country: null,
    address: null,
    is_corporate: false,
    created_time: 0,
    tx_signature: '',
  })

  useEffect(() => {
    if (params) {
      const fetchCertificateInfo = async () => {
        const res = await userService.getDetailCertificate(params?.id as string)
        if (res) {
          setCertificateInfo(res)
        }
      }
      fetchCertificateInfo()
    }
  }, [params])

  useEffect(() => {
    if (certificateInfo?.tx_signature === '') {
      if (localStorage.getItem('certificates')) {
        const listCertificates = JSON.parse(localStorage.getItem('certificates') || '')
        if (listCertificates[params?.id as string]) {
          setCertificateInfo({ ...certificateInfo, tx_signature: listCertificates[params?.id as string] })
        }
      }
    }
  }, [certificateInfo, params?.id])

  return (
    <div className='relative flex w-full justify-center pb-16 pt-[145px]'>
      <Image src={wholeBg} alt='background' className='absolute inset-0 z-[-1]' fill />
      <div className='w-[96.6%] max-w-[595px] border border-[#CFCFCF] font-lexend-deca'>
        {/* Header */}
        <div
          style={{
            background:
              'linear-gradient(90deg, rgba(68, 30, 255, 0.933333) 0%, #866EF9 50.44%, rgba(68, 30, 255, 0.933333) 100%)',
          }}
          className='relative overflow-hidden p-[10px] text-center text-xs font-normal text-white'
        >
          <div className='absolute left-0 top-1/2 translate-x-[-50%] translate-y-[-50%] rotate-45 bg-[#866EF9] p-[22px] md:p-8'>
            <div className='size-11 bg-[#81E234] md:size-16'></div>
          </div>
          <div className='absolute right-0 top-1/2 translate-x-[50%] translate-y-[-50%] rotate-45 bg-[#866EF9] p-[22px] md:p-8'>
            <div className='size-11 bg-[#81E234] md:size-16'></div>
          </div>
          DCarbon Protocol officially certificates
        </div>

        {/* Content */}
        <div
          style={{ background: `url(${contentBg.src})` }}
          className='relative flex flex-col gap-10 px-[43px] py-14 md:gap-[70px] md:px-16'
        >
          <Cornor position='top-left' />
          <Cornor position='top-right' />
          <Cornor position='bot-left' />
          <Cornor position='bot-right' />
          <div className='flex justify-between'>
            <Image src={logo} alt='logo' className='h-4 w-auto md:h-6' />
            <p className='text-right text-8px font-normal text-[#979E91] md:text-xs'>
              2nd floor, Building 40 Phan Boi Chau, <br />
              Cua Nam Ward, Hoan Kiem District, <br />
              Hanoi, Vietnam
            </p>
          </div>

          <div className='space-y-3 md:space-y-4'>
            <p className='text-xs font-medium text-[#441EFFEE] md:text-lg md:leading-[22px]'>
              Certification Authenticated and issued by <br />
              DCarbon Protocol
            </p>
            <p className='font-space-grotesk text-[44px] font-bold leading-[38px] tracking-[-1.4px] text-black md:text-[64px] md:leading-[58px]'>
              Certificate of carbon credits retirement
            </p>
          </div>

          <div className='flex gap-5 text-10px font-medium md:gap-8 md:text-base md:leading-5'>
            <div className='space-y-[6px] text-[#979E91] md:space-y-2'>
              <p>The Transaction at</p>
              <p>Date</p>
            </div>
            <div className='space-y-[6px] text-[#1C2916] md:space-y-2'>
              <p>{addressWalletCompact(certificateInfo?.tx_signature)}</p>
              <p>
                {new Date(Number(certificateInfo?.created_time) * 1000)?.toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </p>
            </div>
          </div>

          <div className='flex items-end justify-between gap-5 md:gap-8'>
            <div className='flex flex-col gap-[10px] text-10px font-normal text-[#888888] md:gap-4 md:text-base md:leading-5'>
              <p className=''>is the proof that</p>
              <p className='text-[38px] leading-[54px] text-[#1C2916] md:text-[56px] md:leading-[79px]'>
                {certificateInfo?.name}
              </p>
              <p>
                Has retired <span className='font-medium text-black'> {certificateInfo?.amount} CARBON </span>token from
                the <br /> Phu Tho pig farm project
              </p>
            </div>
            <Image src={wholeBg} alt='qr' className='size-16 md:size-24' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReviewCertificate
