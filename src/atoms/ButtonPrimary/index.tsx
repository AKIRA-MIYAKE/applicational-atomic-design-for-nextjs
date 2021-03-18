import { DetailedHTMLProps, ButtonHTMLAttributes, forwardRef } from 'react'
import clsx from 'clsx'

import { focusClasses } from '../../styles/class-values'

export type ButtonPrimaryProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  block?: boolean
}

const ButtonPrimary = forwardRef<HTMLButtonElement, ButtonPrimaryProps>(
  ({ block, ...props }, ref) => {
    return (
      <button
        {...props}
        ref={ref}
        className={clsx(
          'h-9',
          'px-3',
          'text-white',
          'bg-indigo-500',
          'border',
          'border-indigo-500',
          'rounded-md',
          // transition
          'transition',
          // hover
          'hover:bg-indigo-600',
          'hover:border-indigo-600',
          // focus
          focusClasses,
          // disabled
          'disabled:text-gray-500',
          'disabled:bg-gray-300',
          'disabled:border-gray-300',
          'disabled:cursor-default',
          // block
          block && 'block',
          block && 'w-full'
        )}
      />
    )
  }
)

ButtonPrimary.displayName = 'ButtonPrimary'

export default ButtonPrimary
