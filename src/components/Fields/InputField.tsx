import { useState } from 'react'
import { Control, Controller, FieldErrors, FieldPath, FieldValues } from 'react-hook-form'

interface IInput<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> {
  placeholder?: string
  label?: string
  required?: boolean
  type?: string
  disabled?: boolean
  control: Control<TFieldValues>
  name: TName
  errors?: FieldErrors
  readOnly?: boolean
  extraType?: 'positive-number' | 'negative-number'
}

const InputField = <T extends FieldValues>({
  label,
  type = 'text',
  placeholder,
  required = false,
  name,
  control,
  disabled = false,
  errors,
  readOnly = false,
  //   extraType,
}: IInput<T>) => {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <Controller
      name={name}
      control={control}
      rules={{ required }}
      render={({ field }) => (
        <div className='space-y-1'>
          {label && (
            <div className='text-sm font-medium leading-[18px] text-[#888888]'>
              {label}
              {required && <span className='text-[#EE512E]'> *</span>}
            </div>
          )}

          <div className='flex items-center justify-between border-b border-[#DFDFDF] px-2 py-1'>
            <input
              {...field}
              className='flex-1 border-none bg-transparent text-sm leading-[18px] text-[#1F2124] outline-none placeholder:text-sm placeholder:font-light placeholder:leading-[18px] placeholder:text-[#D2D2D2]'
              placeholder={placeholder}
              disabled={disabled}
              type={type}
              readOnly={readOnly}
              autoComplete='off'
              //   onKeyDown={e => {
              //     (extraType == 'positive-number' && !isValidNumberKey(e.key, true)) && e.preventDefault();
              //     (extraType == 'negative-number' && !isValidNumberKey(e.key)) && e.preventDefault()
              //   }}
            />

            {type === 'password' && (
              <div
                className='cursor-pointer text-[#9F9EA4] hover:opacity-80'
                onClick={() => setShowPassword(!showPassword)}
              >
                {/* {showPassword ? <FiEye size={20} /> : <FiEyeOff size={20} />} */}
              </div>
            )}
          </div>

          {errors && errors[name] && (
            <div className='text-xs font-normal text-red-500'>{errors[name]?.message?.toString()}</div>
          )}
        </div>
      )}
    />
  )
}

export default InputField
