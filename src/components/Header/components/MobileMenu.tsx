import { useTheme } from '@/context/ThemeContext'
import menuImg from '@/images/header/menu.svg'
import menuDarkImg from '@/images/header/menu_dark.svg'
import Image from 'next/image'

const MobileMenu = () => {
  const { theme } = useTheme()
  return (
    <div className='flex items-center justify-center md:hidden'>
      <button className='w-fit bg-transparent'>
        <Image src={theme === 'light' ? menuImg : menuDarkImg} width={32} height={32} alt='menu' />
      </button>
    </div>
  )
}

export default MobileMenu
