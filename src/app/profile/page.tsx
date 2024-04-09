'use client'
import { getProfile } from '@/actions/user.action'
import Certificate from '@/components/Certificate/Certificate'
import Transaction from '@/components/Transaction/Transaction'
import { useTheme } from '@/context/ThemeContext'
import { useAppDispatch, useAppSelector } from '@/hooks/hooks'
import Avatar from '@/images/profile/avatar.png'
import copyIcon from '@/images/profile/copy.svg'
import editIcon from '@/images/profile/edit.svg'
import { selectProfile } from '@/reducers/userSlice'
import { addressWalletCompact, handleCopy } from '@/utils/format'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

export interface UserProfile {
  id: string
  name: string
  avatar: string
  fund: number
  offset: number
  address: string
  created_time: number
}

const Profile = () => {
  const profile = useAppSelector(selectProfile)
  const dispatch = useAppDispatch()

  const [activeTab, setActiveTab] = useState('certificate')
  const { setTheme } = useTheme()
  useEffect(() => {
    setTheme('dark')
  }, [setTheme])

  // const [profile, setProfile] = useState<UserProfile | undefined>()
  useEffect(() => {
    if (!profile) {
      dispatch(getProfile())
    }
  }, [dispatch, profile])

  return (
    <div className='relative z-0 mx-auto w-full max-w-[1440px] bg-transparent px-4 py-4 md:px-20 md:py-8'>
      <div className='relative z-10 flex flex-col-reverse items-start justify-between gap-12 py-3 md:flex-row'>
        <div className='flex w-full flex-1 flex-col items-start justify-start gap-8'>
          <div className='flex w-full items-center justify-center border-b border-[rgba(223,223,223,1)] md:block'>
            <button
              onClick={() => setActiveTab('certificate')}
              className={`${activeTab === 'certificate' ? 'border-b-[2px] border-[rgba(129,226,52,1)] text-[rgba(28,41,22,1)] ' : 'border-none text-[rgba(136,136,136,1)]'} h-fit w-fit px-6 py-2 font-space-grotesk text-2xl font-bold leading-[30.62px] tracking-[-0.96px] outline-none active:outline-none`}
            >
              Certificated
            </button>
            <button
              onClick={() => setActiveTab('transaction')}
              className={`${activeTab === 'transaction' ? 'border-b-[2px] border-[rgba(129,226,52,1)] text-[rgba(28,41,22,1)] ' : 'border-none text-[rgba(136,136,136,1)]'} h-fit w-fit px-6 py-2 font-space-grotesk text-2xl font-bold leading-[30.62px] tracking-[-0.96px] outline-none active:outline-none`}
            >
              Transaction
            </button>
          </div>
          <div className='h-full w-full'>{activeTab === 'certificate' ? <Certificate /> : <Transaction />}</div>
        </div>
        <div className='flex w-[380px] flex-col items-center justify-center gap-5 rounded-[32px] border border-[rgba(223,223,223,1)] bg-white p-8'>
          <div className='relative h-[176px] w-[176px] rounded-full border-[4px] border-[#DFDFDF] bg-transparent p-1'>
            <Image
              loader={({ src }) => src}
              src={profile?.avatar || Avatar}
              alt='Avatar'
              width={160}
              height={160}
              className='rounded-full'
            />
            <button className='absolute bottom-0 right-0 rounded-full bg-white p-3 shadow-[2px_4px_8px_0px_rgba(0,0,0,0.10)]'>
              <Image src={editIcon} alt='Edit' width={24} height={24} />
            </button>
          </div>
          <p className='font-lexend-deca text-xl font-medium leading-[25px] tracking-[-0.8px] text-black'>
            {profile?.name}
          </p>
          <div className='h-[1px] w-[120px] bg-[rgba(223,223,223,1)]'></div>
          <div className='flex flex-row items-center justify-between gap-6'>
            <h4 className='font-lexend text-base font-medium leading-5 tracking-[-0.64px] text-[rgba(151,158,145,1)]'>
              Address
            </h4>
            <div className='flex flex-row items-center gap-1'>
              <p className='font-lexend-deca text-sm font-medium leading-[17.5px] tracking-[-0.56px] text-[rgba(28,41,22,1)]'>
                {addressWalletCompact(profile?.address as string)}
              </p>
              <button
                onClick={() => {
                  handleCopy(profile?.address as string)
                  toast.success('Copied to clipboard', {
                    position: 'bottom-right',
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                  })
                }}
              >
                <Image src={copyIcon} alt='Copy' width={20} height={20} />
              </button>
            </div>
          </div>
          <div className='grid w-full grid-cols-2 gap-2'>
            <div className='flex w-full flex-col items-center justify-center rounded-lg bg-[rgba(243,246,243,1)] px-8 py-4'>
              <h4 className='font-lexend text-base font-medium leading-5 tracking-[-0.64px] text-[rgba(151,158,145,1)]'>
                Funded
              </h4>
              <p className='font-lexend-deca text-sm font-medium leading-[17.5px] tracking-[-0.56px] text-[rgba(28,41,22,1)]'>
                {profile?.fund} USDC
              </p>
            </div>
            <div className='flex w-full flex-col items-center justify-center rounded-lg bg-[rgba(243,246,243,1)] px-8 py-4'>
              <h4 className='font-lexend text-base font-medium leading-5 tracking-[-0.64px] text-[rgba(151,158,145,1)]'>
                Offset
              </h4>
              <p className='font-lexend-deca text-sm font-medium leading-[17.5px] tracking-[-0.56px] text-[rgba(28,41,22,1)]'>
                {profile?.offset} USDC
              </p>
            </div>
          </div>
          <button className='h-fit w-full rounded-[32px] border border-black bg-white py-3 font-lexend-deca text-base font-normal leading-5 tracking-[-0.64px] text-[rgba(28,41,22,1)] outline-none active:outline-none'>
            Edit Profile
          </button>
        </div>
      </div>
      <div className='absolute right-[147.14px] top-[-268.43px] h-[312.86px] w-[312.86px] rounded-full bg-[rgba(129,226,52,1)] opacity-25 blur-[160px]'></div>
    </div>
  )
}

export default Profile
