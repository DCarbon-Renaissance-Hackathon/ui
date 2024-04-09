import arrowLeft from '@/images/banner/arrow_left.svg'
import Image from 'next/image'

const BtnGetInTouch = () => {
  return (
    <button className="flex h-[83px] w-[328px] flex-row items-center justify-center gap-4 rounded-[328px] bg-[url('/images/banner/btn_bg.svg')] bg-cover bg-center bg-no-repeat pb-[10px]">
      <p className='font-space-grotesk text-[32px] font-bold leading-[40.83px] tracking-[-0.64px] text-[rgba(28,41,22,1)]'>
        GET IN TOUCH
      </p>
      <div className='flex h-8 w-8 items-center justify-center'>
        <Image src={arrowLeft} alt='Get in touch' width={32} height={32} className='h-full w-full' />
      </div>
    </button>
  )
}

const Banner = () => {
  return (
    <div className="flex h-[693px] w-full items-end bg-[url('/images/banner/banner_bg.png')] bg-cover bg-center bg-no-repeat">
      <div className='mx-auto flex w-full max-w-[1440px] flex-col-reverse items-center justify-between gap-8 bg-transparent px-9 pb-[38px] pt-12 md:flex-row md:px-20 md:py-12'>
        <BtnGetInTouch />
        <div className='h-fit w-fit rounded-[32px] border border-white bg-[rgba(255,255,255,0.1)] px-8 py-4'>
          <p className='w-[255px] text-xl font-medium leading-[25px] tracking-[-0,8px] text-white'>
            Lorem ipsum blah blah blah Second sentence.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Banner
