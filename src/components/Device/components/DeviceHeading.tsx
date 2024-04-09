import arrowDown from '@/images/project/arrow_down.svg'
import filterIcon from '@/images/project/filter.svg'
import searchIcon from '@/images/project/search.svg'
import Image from 'next/image'

type DeviceHeadingProps = {
  // eslint-disable-next-line no-unused-vars
  setSearchValue: (value: string) => void
}
const DeviceHeading = ({ setSearchValue }: DeviceHeadingProps) => {
  return (
    <div className='flex w-full flex-row items-center justify-between gap-4 px-5 md:pl-20 md:pr-0'>
      <div className='flex flex-1 flex-row gap-[10px] rounded-[32px] border border-[rgba(223,223,223,1)] px-4 py-3 md:w-[400px] md:flex-none'>
        <Image src={searchIcon} width={24} height={24} alt='search' />
        <input
          className='w-full flex-1 bg-transparent font-lexend-deca text-base font-normal leading-[20px] tracking-[-0.64px] text-black outline-none placeholder:text-[rgba(136,136,136,1)] hover:outline-none focus:outline-none active:outline-none'
          type='text'
          placeholder='Search by name or trait'
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </div>
      <div className='flex flex-row items-center gap-2'>
        <div className='hidden w-fit flex-row items-center gap-2 rounded-[32px] border border-[rgba(226,226,226,1)] px-4 py-3 md:flex'>
          <p className='text-sm font-light leading-6 tracking-[-0.56px] text-[rgba(140,140,140,1)]'>
            Clean Cook Stoves
          </p>
          <button className='h-4 w-4'>
            <Image src={arrowDown} width={16} height={16} alt='sort' />
          </button>
        </div>
        <div className='hidden w-fit flex-row items-center gap-2 rounded-[32px] border border-[rgba(226,226,226,1)] px-4 py-3 md:flex'>
          <div className='flex flex-row items-center text-sm font-light leading-6 tracking-[-0.56px] text-[rgba(140,140,140,1)]'>
            <p>Country:</p>
            <p className='flex-1 text-sm font-semibold leading-6 tracking-[-0.56px] text-[rgba(77,119,57,1)]'>
              Viet Nam
            </p>
          </div>
          <button className='h-4 w-4'>
            <Image src={arrowDown} width={16} height={16} alt='sort' />
          </button>
        </div>
        <button className='rounded-full border border-[rgba(226,226,226,1)] bg-white p-3'>
          <Image src={filterIcon} width={24} height={24} alt='filter' />
        </button>
      </div>
    </div>
  )
}

export default DeviceHeading
