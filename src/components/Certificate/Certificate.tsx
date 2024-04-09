import { getListCertificate } from '@/actions/user.action'
import { useAppDispatch, useAppSelector } from '@/hooks/hooks'
import { CertificateInfo, selectCertificates } from '@/reducers/userSlice'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import MainButton from '../Buttons/MainButton'

const pageNumber = 4

const Certificate = () => {
  const listCertificates = useAppSelector(selectCertificates)
  const [filterListCertificates, setFilterListCertificates] = useState<CertificateInfo[] | undefined>()

  const dispatch = useAppDispatch()

  useEffect(() => {
    if (!listCertificates) {
      dispatch(getListCertificate())
    }
  }, [listCertificates, dispatch])

  useEffect(() => {
    setFilterListCertificates(listCertificates?.slice(0, pageNumber))
  }, [listCertificates])

  const router = useRouter()
  return (
    <div className='flex w-full flex-col items-center justify-center gap-6'>
      <div className='mx-auto flex w-full flex-row flex-wrap gap-4'>
        {filterListCertificates?.map((item: CertificateInfo) => (
          <div
            onClick={() => {
              router.push(`/certificate/${item.id}`)
            }}
            key={item.id}
            className='flex w-[414px] flex-col overflow-hidden rounded-2xl border border-[rgba(223,223,223,1)] bg-white'
          >
            <div className="flex h-[200px] w-full items-center justify-center bg-[url('/images/certificate/content-review-bg.png')] bg-cover bg-center bg-no-repeat p-6">
              {/* <Image
              src='/images/certificate/content-review-bg.png'
              alt='Certificate'
              objectFit='cover'
              width={414}
              height={200}
              className='h-full w-full object-cover'
            /> */}
              <h4 className='font-lexend text-4xl font-bold leading-9 tracking-[-1.44px] text-black'>
                Certificate of carbon credits retirement
              </h4>
            </div>
            <div className='flex flex-col gap-4 p-4'>
              <div className='flex flex-col items-start gap-2'>
                <div className='flex flex-row gap-4'>
                  <p className='w-[128px]'>Issuer</p>
                  <p>{item?.name}</p>
                </div>
                <div className='flex flex-row gap-4'>
                  <p className='w-[128px]'>Date</p>
                  <p>{`${new Date(Number(item?.created_time) * 1000).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                  })}`}</p>
                </div>
                <div className='flex flex-row gap-4'>
                  <p className='w-[128px]'>Retired Tokens</p>
                  <p>{item?.amount} CARBON</p>
                </div>
                <div className='flex flex-row gap-4'>
                  <p className='w-[128px]'>Project</p>
                  <p>{item?.project_type}</p>
                </div>
                <div className='flex flex-row gap-4'>
                  <p className='w-[128px]'>Transaction ID</p>
                  <p>{item?.id}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className='w-fit'>
        <MainButton
          title='Load more'
          onClick={() => {
            setFilterListCertificates(listCertificates?.slice(0, Number(filterListCertificates?.length) + pageNumber))
          }}
          background='#441EFFEE'
          color='white'
          className={`${Number(filterListCertificates?.length) >= Number(listCertificates?.length) ? 'hidden' : 'block'}`}
        />
      </div>
    </div>
  )
}

export default Certificate
