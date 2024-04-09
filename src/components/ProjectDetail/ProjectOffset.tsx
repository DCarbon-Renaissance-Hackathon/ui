import { getAvailableCarbon } from '@/actions/device.action'
import { useAppDispatch } from '@/hooks/hooks'
import { DeviceDetail } from '@/reducers/deviceSlice'
import { hexToDecimal } from '@/utils/format'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import { useRouter } from 'next/navigation'
import React, { Fragment, SetStateAction, useEffect, useState } from 'react'
type ProjectOffsetProps = {
  deviceInfo?: DeviceDetail
}
const Assets = [
  { tokenName: 'USDC' },
  { tokenName: 'BTC' },
  { tokenName: 'USDT' },
  { tokenName: 'ETH' },
  { tokenName: 'MATIC' },
  { tokenName: 'SOL' },
]
const SelectAsset = ({
  selected,
  setSelected,
}: {
  selected: { tokenName: string }
  setSelected: React.Dispatch<
    SetStateAction<{
      tokenName: string
    }>
  >
}) => {
  return (
    <div className='w-[35%]'>
      <Listbox value={selected} onChange={setSelected}>
        <div className='relative mt-1'>
          <Listbox.Button className='relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm'>
            <span className='block truncate'>{selected.tokenName}</span>
            <span className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2'>
              <ChevronUpDownIcon className='h-5 w-5 text-gray-400' aria-hidden='true' />
            </span>
          </Listbox.Button>
          <Transition as={Fragment} leave='transition ease-in duration-100' leaveFrom='opacity-100' leaveTo='opacity-0'>
            <Listbox.Options className='absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm'>
              {Assets.map((person, personIdx) => (
                <Listbox.Option
                  key={personIdx}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? 'bg-[#81E234] text-black' : 'text-gray-900'
                    }`
                  }
                  value={person}
                >
                  {({ selected }) => (
                    <>
                      <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>
                        {person.tokenName}
                      </span>
                      {selected ? (
                        <span className='absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600'>
                          <CheckIcon className='h-5 w-5' aria-hidden='true' />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  )
}
const ProjectOffset = ({ deviceInfo }: ProjectOffsetProps) => {
  const [selected, setSelected] = useState(Assets[0])
  const [amount, setAmount] = useState('0.1')
  const [availableCarbon, setAvailableCarbon] = useState(0)
  const router = useRouter()
  const handleClick = async () => {
    await localStorage.setItem(
      'device',
      JSON.stringify({
        ...deviceInfo,
        amount: Number(amount),
      })
    )
    router.push('/certificate')
  }

  const dispatch = useAppDispatch()

  useEffect(() => {
    if (deviceInfo) {
      const fetchData = async () => {
        const res = await dispatch(getAvailableCarbon({ id: deviceInfo?.device?.id }))
        if (res) {
          const amount = hexToDecimal(String(res?.payload?.amount))
          setAvailableCarbon(amount)
        }
      }
      fetchData()
    }
  }, [deviceInfo, dispatch])

  return (
    <div className=' flex w-[60%] flex-col items-center gap-5 font-lexend-deca max-md:w-full'>
      <div className='flex w-full items-center justify-between whitespace-nowrap text-[#1C2916]'>
        <p className='text-[18px] font-[600]'>{availableCarbon} available</p>
        <p className='text-[16px] font-[300] text-[#979E91]'>1 carbon credit = $5e</p>
      </div>
      <div className='flex w-full flex-col items-center gap-2'>
        <div className='flex items-center justify-between self-stretch rounded-lg border border-[#E3E9DE] px-4 py-3 text-[20px]  font-[500] leading-[25px] text-[#979E91]'>
          <div>Quantity</div>
          <div className='flex w-fit items-center gap-1'>
            <input
              type='number'
              value={String(amount)}
              onChange={(e) => {
                setAmount(e.target.value)
              }}
              className='w-full text-end text-[#1C2916] outline-none hover:outline-none focus:outline-none active:outline-none'
            />{' '}
            <p className='text-end'>CARBON</p>
          </div>
        </div>
        <div className='flex items-center justify-between self-stretch rounded-lg border border-[#E3E9DE] px-4 py-3 text-[20px] font-[500] leading-[25px] text-[#979E91]'>
          <span>Asset</span>
          <SelectAsset selected={selected} setSelected={setSelected} />
        </div>
        <div className='flex items-center justify-between self-stretch rounded-lg border border-[#E3E9DE] px-4 py-3 text-[20px] font-[500] leading-[25px] text-[#979E91]'>
          <span>Total</span>
          <span className='text-[#1C2916]'>{Number(Number(amount) * 5)} USDC</span>
        </div>
      </div>
      <button
        onClick={handleClick}
        className=' self-stretch rounded-full bg-[#81E234] px-4 py-3 text-center text-base font-normal'
      >
        Offset
      </button>
    </div>
  )
}

export default ProjectOffset
