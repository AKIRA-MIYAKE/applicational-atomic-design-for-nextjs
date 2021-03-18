import { DetailedHTMLProps, InputHTMLAttributes, forwardRef } from 'react'
import clsx from 'clsx'

import { focusClasses } from '../../styles/class-values'

export type TextFieldProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  block?: boolean
  error?: boolean
}

const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  ({ block, error, ...props }, ref) => {
    return (
      <input
        {...props}
        ref={ref}
        className={clsx(
          'h-9',
          'px-2',
          'border',
          'border-gray-300',
          'rounded-md',
          // transition
          'transition',
          // hover
          'hover:border-indigo-500',
          // focus
          focusClasses,
          // disabled
          'disabled:text-gray-600',
          'disabled:bg-gray-50',
          // block
          block && 'block',
          block && 'w-full',
          // error
          error && 'border-red-500'
        )}
      />
    )
  }
)

TextField.displayName = 'TextField'

export default TextField
