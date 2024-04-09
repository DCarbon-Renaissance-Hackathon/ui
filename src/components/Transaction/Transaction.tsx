import { getListTransaction } from '@/actions/user.action'
import { useAppDispatch, useAppSelector } from '@/hooks/hooks'
import menuIcon from '@/images/profile/menu.svg'
import { TransactionInfo, selectTransactions } from '@/reducers/userSlice'
import { addressWalletCompact } from '@/utils/format'
import Image from 'next/image'
import { useEffect } from 'react'

const HEADER = ['Date', 'Account', 'Type', 'Amount']

const Transaction = () => {
  const listTransaction = useAppSelector(selectTransactions)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (!listTransaction) {
      dispatch(getListTransaction())
    }
  }, [listTransaction, dispatch])

  return (
    <div className='custom_table mx-auto flex w-full flex-col items-start justify-start gap-2 overflow-x-scroll pb-8 md:overflow-hidden'>
      <div className='grid w-full grid-cols-[1fr_2fr_1fr_1fr] border-b border-[rgba(223,223,223,1)] pb-2'>
        {HEADER.map((item) => (
          <h3
            className='font-lexend text-base font-medium leading-5 tracking-[-0.64px] text-[#888888] first:pl-3'
            key={item}
          >
            {item}
          </h3>
        ))}
      </div>
      <div className='flex h-full w-full flex-col items-start justify-start gap-2'>
        {listTransaction?.map((item: TransactionInfo, index: number) => (
          <div
            key={item?.id}
            className={`${Number(index) % 2 === 0 ? 'bg-[rgba(243,246,243,1)]' : 'bg-transparent'} grid w-full grid-cols-[1fr_2fr_1fr_1fr] items-center rounded-lg px-3 py-2 font-lexend-deca text-sm font-light leading-[17.5px] tracking-[-0.28px]`}
          >
            <p className='w-[120px] whitespace-nowrap text-[#888888]'>
              {`${new Date(Number(item?.created_time) * 1000).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
              })}`}
            </p>
            <p className='w-[300px] whitespace-nowrap text-base font-medium leading-5 tracking-[-0.64px] text-[rgba(57,57,57,1)]'>
              {addressWalletCompact(item?.from_address)}
            </p>
            <p className='w-[100px] whitespace-nowrap text-[rgba(68,30,255,0.93)]'>{item?.type}</p>
            <div className='flex flex-row items-center gap-8'>
              <p className='w-[148px] whitespace-nowrap text-base font-medium leading-5 tracking-[-0.64px] text-[rgba(57,57,57,1)]'>
                -${item?.amount}
              </p>
              <button className=''>
                <Image src={menuIcon} alt='Copy' width={32} height={32} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Transaction
