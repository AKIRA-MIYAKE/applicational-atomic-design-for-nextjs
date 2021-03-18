import { DetailedHTMLProps, SelectHTMLAttributes, forwardRef } from 'react'
import clsx from 'clsx'

import { focusClasses } from '../../styles'

export type SelectProps = DetailedHTMLProps<
  SelectHTMLAttributes<HTMLSelectElement>,
  HTMLSelectElement
> & {
  block?: boolean
  error?: boolean
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ block, error, ...props }, ref) => {
    return (
      <div className={clsx('relative', !block && 'inline-block')}>
        <select
          {...props}
          ref={ref}
          className={clsx(
            'appearance-none',
            'h-9',
            'pl-2',
            'pr-8',
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
            'block',
            'w-full',
            // error
            error && 'border-red-500'
          )}
        />
        <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
          <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
            <path
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
              fillRule="evenodd"
            ></path>
          </svg>
        </div>
      </div>
    )
  }
)

Select.displayName = 'Select'

export default Select
