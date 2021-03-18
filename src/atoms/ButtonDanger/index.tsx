import { DetailedHTMLProps, ButtonHTMLAttributes, forwardRef } from 'react'
import clsx from 'clsx'

import { focusClasses } from '../../styles/class-values'

export type ButtonDangerProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  block?: boolean
}

const ButtonDanger = forwardRef<HTMLButtonElement, ButtonDangerProps>(
  ({ block, ...props }, ref) => {
    return (
      <button
        {...props}
        ref={ref}
        className={clsx(
          'h-9',
          'px-3',
          'text-white',
          'bg-red-500',
          'border',
          'border-red-500',
          'rounded-md',
          // transition
          'transition',
          // hover
          'hover:bg-red-600',
          'hover:border-red-600',
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

ButtonDanger.displayName = 'ButtonDanger'

export default ButtonDanger
