import { DetailedHTMLProps, AnchorHTMLAttributes, forwardRef } from 'react'
import clsx from 'clsx'

import { focusClasses } from '../../styles'

export type AnchorButtonPrimaryProps = DetailedHTMLProps<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
> & {
  block?: boolean
}

const AnchorButtonPrimary = forwardRef<
  HTMLAnchorElement,
  AnchorButtonPrimaryProps
>(({ block, ...props }, ref) => {
  return (
    // eslint-disable-next-line
    <a
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
        // centering text
        'justify-center',
        'items-center',
        // block
        !block && 'inline-flex',
        block && 'flex',
        block && 'w-full'
      )}
    />
  )
})

AnchorButtonPrimary.displayName = 'AnchorButtonPrimary'

export default AnchorButtonPrimary
