'use client'

import { useTheme } from '@/context/ThemeContext'
import Image from 'next/image'
import Link from 'next/link'
import BtnConnectWallet from './components/BtnConnectWallet'
import MobileMenu from './components/MobileMenu'

const MENU = [
  {
    id: 0,
    title: 'Home',
    link: '/',
  },
  {
    id: 1,
    title: 'Profile',
    link: '/profile',
  },
  // {
  //   id: 2,
  //   title: 'Marketplace',
  //   link: '/marketplace',
  // },
  // {
  //   id: 3,
  //   title: 'Blog',
  //   link: '/blog',
  // },
]

const Header = () => {
  const { theme } = useTheme()
  return (
    <div
      className={`relative z-10 w-full ${theme === 'light' ? 'bg-[linear-gradient(0deg,rgba(16,24,40,0.00)_0%,rgba(23,39,71,0.25)_48.4%,rgba(22,29,44,0.60)_100%)]' : ''} `}
    >
      <div className='mx-auto flex w-full max-w-[1440px] flex-row items-center justify-between p-5 md:px-20 md:py-4'>
        <Link href='/'>
          <Image
            src={theme === 'light' ? '/images/header/logo.svg' : '/images/header/logo_dark.svg'}
            alt='Logo'
            width={208}
            height={32}
          />
        </Link>
        <div
          className={`hidden flex-row items-center gap-2 text-base  font-medium leading-[20px] tracking-[-0.64px] ${theme === 'light' ? 'text-white' : 'text-[#878787]'} md:flex`}
        >
          {MENU.map((item) => (
            <button className='w-fit bg-transparent px-8 py-[14px] outline-none active:outline-none' key={item.id}>
              <Link className='font-lexend-deca' href={item.link}>
                {item.title}
              </Link>
            </button>
          ))}
        </div>
        <BtnConnectWallet />
        <MobileMenu />
      </div>
    </div>
  )
}

export default Header
