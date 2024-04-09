import Logo from '@/images/footer/footer_logo.png'
import Image from 'next/image'
import Link from 'next/link'

// const MENU = [
//   {
//     id: 0,
//     title: 'Heading 1',
//     items: [
//       {
//         id: 0,
//         title: 'Item 1',
//         link: '',
//       },
//       {
//         id: 1,
//         title: 'Item 2',
//         link: '',
//       },
//       {
//         id: 2,
//         title: 'Item 3',
//         link: '',
//       },
//       {
//         id: 3,
//         title: 'Item 4',
//         link: '',
//       },
//     ],
//   },
//   {
//     id: 2,
//     title: 'Heading 2',
//     items: [
//       {
//         id: 0,
//         title: 'Item 1',
//         link: '',
//       },
//       {
//         id: 1,
//         title: 'Item 2',
//         link: '',
//       },
//       {
//         id: 2,
//         title: 'Item 3',
//         link: '',
//       },
//       {
//         id: 3,
//         title: 'Item 4',
//         link: '',
//       },
//     ],
//   },
//   {
//     id: 2,
//     title: 'Heading 3',
//     items: [
//       {
//         id: 0,
//         title: 'Item 1',
//         link: '',
//       },
//       {
//         id: 1,
//         title: 'Item 2',
//         link: '',
//       },
//       {
//         id: 2,
//         title: 'Item 3',
//         link: '',
//       },
//     ],
//   },
// ]

const SUB_MENU = [
  {
    id: 0,
    title: 'About',
    link: '',
  },
  {
    id: 1,
    title: 'Advertise',
    link: '',
  },
  {
    id: 2,
    title: 'Terms & Conditions',
    link: '',
  },
  {
    id: 3,
    title: 'Policy',
    link: '',
  },
]

const Footer = () => {
  return (
    <div className='relative w-full bg-transparent'>
      <div className='mx-auto flex w-full max-w-[1440px] flex-col items-center justify-center gap-8 px-5 py-8 md:gap-12 md:px-20'>
        {/* <div className='flex w-full flex-col items-start justify-between gap-8 md:flex-row'>
          <h3 className='text-2xl font-bold leading-[30.62px] tracking-[-0.96px] text-black'>USEFUL LINKS</h3>
          <div className='flex flex-row items-start gap-14'>
            {MENU.map((item) => (
              <div key={item.title} className='flex flex-col items-start gap-6'>
                <h4 className='whitespace-nowrap font-lexend-deca text-[18px] font-medium leading-[22.5px] tracking-[-0.72px] text-black'>
                  {item.title}
                </h4>
                <div className='flex flex-col items-start gap-[6px]'>
                  {item.items.map((subItem) => (
                    <Link
                      className='font-lexend-deca text-sm font-medium leading-[17.5px] tracking-[-0.56px] text-[rgba(151,158,145,1)]'
                      href={subItem.link}
                      key={subItem.title}
                    >
                      {subItem.title}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div> */}
        <div className='h-[1px] w-full bg-[rgba(223,223,223,1)]'></div>
        <div className='w-full'>
          <Image className='mx-auto' src={Logo} alt='Logo' width={1040} height={160} />
        </div>
        <div className='flex w-full flex-row items-center justify-between md:justify-center md:gap-[54px]'>
          {SUB_MENU.map((item) => (
            <Link
              className='text-sm font-normal leading-[20px] tracking-[-0.64px] text-[rgba(136,136,136,1)]'
              href={item.link}
              key={item.id}
            >
              {item.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Footer
