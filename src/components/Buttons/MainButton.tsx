import { ReactNode } from 'react'

interface IBtn {
  title?: string
  icon?: ReactNode
  background?: string
  color?: string
  border?: string
  onClick?: () => void
  disabled?: boolean
  className?: string
  type?: 'submit' | 'reset' | 'button' | undefined
}

const MainButton = ({
  title,
  icon,
  background,
  color,
  border,
  onClick,
  disabled,
  className,
  type = 'submit',
}: IBtn) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      style={{ background, color, border: `1px solid ${border}` }}
      className={`flex w-full items-center justify-center gap-[10px] rounded-[32px] px-4 py-3 transition-all hover:opacity-75 disabled:pointer-events-none disabled:opacity-50 ${className}`}
    >
      {icon}
      {title && <p className='text-sm font-normal'>{title}</p>}
    </button>
  )
}

export default MainButton
