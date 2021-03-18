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
          'bg-gray-500',
          'border',
          'border-gray-500',
          'rounded-md',
          // transition
          'transition',
          // hover
          'hover:bg-gray-600',
          'hover:border-gray-600',
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
