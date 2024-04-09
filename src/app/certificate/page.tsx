'use client'

import { getProfile } from '@/actions/user.action'
import InputField from '@/components/Fields/InputField'
import { useTheme } from '@/context/ThemeContext'
import { useAppDispatch } from '@/hooks/hooks'
import useMintNFT from '@/hooks/useMint'
import { DeviceInfo, ProjectDetail } from '@/reducers/deviceSlice'
import authService from '@/services/authService'
import userService from '@/services/userServices'
import { LocalStorage } from '@/utils/LocalStorage'
import { yupResolver } from '@hookform/resolvers/yup'
import { CircularProgress } from '@mui/material'
import { useWallet } from '@solana/wallet-adapter-react'
import { useWalletModal } from '@solana/wallet-adapter-react-ui'
import { useRouter } from 'next/navigation'
import { useEffect, useMemo, useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import * as yup from 'yup'
import Banner from '../../../public/images/certificate/form-banner.png'

const Certificate = () => {
  const [isLoading, setIsLoading] = useState(false)
  const listTab = [{ label: 'Individual' }, { label: 'Corporate' }]
  const [activeTab, setActiveTab] = useState(listTab[0])
  const { setTheme } = useTheme()
  useEffect(() => {
    setTheme('dark')
  }, [setTheme])

  const schema = useMemo(
    () =>
      yup.object({
        name: yup.string().trim().required('Name is required'),
        address:
          activeTab.label == 'Corporate' ? yup.string().trim().required('Address is required') : yup.string().trim(),
        country:
          activeTab.label == 'Corporate' ? yup.string().trim().required('Country is required') : yup.string().trim(),
        amount: yup.string().trim().required('Amount is required'),
        project_type: yup.string().trim().required('Project type is required'),
        project_location: yup.string().trim().required('Project location is required'),
        reason: yup.string().trim(),
      }),
    [activeTab]
  )

  const {
    handleSubmit,
    // watch,
    control,
    formState: { errors },
    setValue,
  } = useForm({ resolver: yupResolver(schema) })

  const [deviceInfo, setDeviceInfo] = useState({
    amount: 0,
    device: {} as DeviceInfo,
    projectInfo: {} as ProjectDetail,
  })

  useEffect(() => {
    const storedDeviceInfo = localStorage.getItem('device')
    if (storedDeviceInfo) {
      setDeviceInfo(JSON.parse(storedDeviceInfo))
    }
  }, [])

  useEffect(() => {
    if (deviceInfo) {
      setValue('amount', String(deviceInfo?.amount || 0))
      setValue('project_type', String(deviceInfo?.device?.type || ''))
      setValue('project_location', String(deviceInfo?.projectInfo?.address || ''))
    }
  }, [deviceInfo, setValue])

  // const [certificateId, setCertificateId] = useState<string>('')
  const { mintNFT } = useMintNFT({
    projectId: deviceInfo?.projectInfo?.id || '',
    // certificateId: certificateId || '',
    // deviceId: deviceInfo?.device?.id || '',
    amount: deviceInfo?.amount || 0,
  })

  const router = useRouter()

  const dispatch = useAppDispatch()
  const { setVisible } = useWalletModal()
  const { connected, publicKey, signMessage } = useWallet()
  const [isClickedConnect, setIsClickedConnect] = useState<boolean>(false)
  const connectFlag = useMemo(() => isClickedConnect && connected, [isClickedConnect, connected])
  useEffect(() => {
    const getSignMessage = async () => {
      try {
        const response = await authService.sign()
        if (response?.data) {
          return {
            message: response?.data?.sign_message,
            nonce: response?.data?.nonce,
          }
        }
      } catch (error) {
        LocalStorage.clearToken()
      }
    }
    const verifySignMessage = async () => {
      try {
        const sign = await getSignMessage()

        const encodedMessage = new TextEncoder().encode(sign?.message)
        const signature = signMessage && (await signMessage(encodedMessage))
        if (signature) {
          const decodedSignature = btoa(String.fromCharCode(...Array.from(new Uint8Array(signature))))

          const res = await authService.signIn({
            signature: decodedSignature,
            address: publicKey?.toString() || '',
            nonce: sign?.nonce,
          })

          if (res) {
            // setAddress(wallet.publicKey.toString())
            LocalStorage.setToken(res?.data?.access_token)
            dispatch(getProfile())
          }
        }
      } catch (err) {
        console.log(err)
      }
    }
    if (connectFlag) {
      verifySignMessage()
    }
  }, [connectFlag, publicKey, setVisible, signMessage, dispatch])
  const onSubmit = async (data: yup.InferType<typeof schema>) => {
    setIsLoading(true)
    if (activeTab.label == 'Corporate') {
      try {
        const res = await userService.submitCertificateCorporate({
          name: data?.name,
          amount: deviceInfo?.amount || 0,
          project_type: data?.project_type || '',
          project_location: data?.project_location || '',
          reason: data?.reason || '',
          project_id: deviceInfo?.device?.project || '',
          device_id: deviceInfo?.device?.id || '',
          country: data?.country || '',
          address: data?.address || '',
        })
        if (res) {
          // setCertificateId(res?._id)
          const tx = await mintNFT(res?._id)
          if (tx) {
            router.push(`/certificate/${res?._id}`)
          }
        }
      } catch (error) {
        toast.error('Failed to mint NFT', {
          position: 'bottom-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        })
        setIsLoading(false)
      } finally {
        setIsLoading(false)
      }
    } else {
      try {
        const res = await userService.submitCertificateIndividual({
          name: data?.name,
          amount: deviceInfo?.amount || 0,
          project_type: data?.project_type || '',
          project_location: data?.project_location || '',
          reason: data?.reason || '',
          project_id: deviceInfo?.device?.project || '',
          device_id: deviceInfo?.device?.id || '',
        })
        if (res) {
          // setCertificateId(res?._id)
          const tx = await mintNFT(res?._id)
          if (tx) {
            router.push(`/certificate/${res?._id}`)
          }
        }
      } catch (error) {
        toast.error('Failed to mint NFT', {
          position: 'bottom-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        })
        setIsLoading(false)
      } finally {
        setIsLoading(false)
      }
    }
  }

  return (
    <div className='relative mt-[81px] flex justify-center py-8 md:py-12'>
      <div
        style={{ background: '#441EFFEE' }}
        className='absolute bottom-16 left-[-86px] z-[-1] size-[518px] rounded-full opacity-25 blur-[180px]'
      />
      <div
        style={{ background: '#866EF9' }}
        className='absolute left-[426px] top-[calc(100%-100px)] z-[-1] size-[384px] rounded-full opacity-25 blur-[120px]'
      />
      <div
        style={{ background: '#81E234' }}
        className='absolute bottom-[-190px] right-[0] z-[-1] size-[568px] rounded-full opacity-25 blur-[180px]'
      />
      <div
        style={{ boxShadow: '0px 4px 32px 0px #0000000D' }}
        className='relative w-full max-w-[480px] overflow-hidden bg-white font-space-grotesk md:rounded-2xl'
      >
        {/* Header */}
        <div
          className='flex h-[105px] w-full items-center justify-center object-center'
          style={{ background: `url(${Banner.src})` }}
        >
          <h1 className='text-[32px] font-bold leading-10 text-white'>Certificate Info</h1>
        </div>

        {/* Tabs bar */}
        <div className='flex items-center justify-center border-b border-[#DFDFDF] pt-4'>
          {listTab.map((tab) => (
            <button
              key={tab.label}
              onClick={() => setActiveTab(tab)}
              className={`border-b-2 transition-all ${tab.label == activeTab.label ? ' border-[#81E234] text-[#1C2916]' : 'border-transparent text-[#888888]'}`}
            >
              <p className='px-6 py-2 text-2xl font-bold'>{tab.label}</p>
            </button>
          ))}
        </div>

        {/* Form */}
        <form
          onSubmit={() => {
            handleSubmit(onSubmit)
          }}
          className='space-y-6 px-8 py-6 font-lexend-deca'
        >
          <InputField label='Name' placeholder='Name' required control={control} name='name' errors={errors} />
          {activeTab.label == 'Corporate' && (
            <div className='space-y-6'>
              <InputField
                label='Address'
                placeholder='Address'
                required
                control={control}
                name='address'
                errors={errors}
              />
              <InputField
                label='Country'
                placeholder='Country'
                required
                control={control}
                name='country'
                errors={errors}
              />
            </div>
          )}
          <InputField
            label='Amount'
            placeholder='Amount'
            required
            control={control}
            name='amount'
            errors={errors}
            readOnly
          />
          <InputField
            label='Project Type'
            placeholder='Project Type'
            required
            control={control}
            name='project_type'
            errors={errors}
            readOnly
          />
          <InputField
            label='Project Location'
            placeholder='Project Location'
            required
            control={control}
            name='project_location'
            errors={errors}
            // readOnly
          />
          <InputField label='Reason' placeholder='Reason' control={control} name='reason' errors={errors} />
          <button
            type='submit'
            disabled={isLoading}
            onClick={(e) => {
              e.preventDefault()
              if (!connected) {
                setVisible(true)
                setIsClickedConnect(true)
              } else {
                handleSubmit(onSubmit)()
              }
            }}
            className={`flex w-full items-center justify-center gap-[10px] rounded-[32px] bg-[#441EFFEE] px-4 py-3 text-white transition-all hover:opacity-75 disabled:pointer-events-none disabled:opacity-50`}
          >
            {isLoading ? (
              <>
                <CircularProgress
                  style={{
                    color: '#ffffff',
                  }}
                  size='1.2rem'
                />
                Loading
              </>
            ) : (
              'Create'
            )}
          </button>
          {/* ) : (
            <MainButton
              title='Create'
              onClick={() => {
                if (!connected) {
                  setVisible(true)
                  setIsClickedConnect(true)
                } else {
                  handleSubmit(onSubmit)
                }
              }}
              background='#441EFFEE'
              color='white'
            /> */}
        </form>
      </div>
    </div>
  )
}

export default Certificate
