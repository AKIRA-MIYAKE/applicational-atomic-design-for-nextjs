import { DetailedHTMLProps, TextareaHTMLAttributes, forwardRef } from 'react'
import clsx from 'clsx'

import { focusClasses } from '../../styles/class-values'

export type TextAreaProps = DetailedHTMLProps<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
> & {
  block?: boolean
  error?: boolean
}

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ block, error, ...props }, ref) => {
    return (
      <textarea
        {...props}
        ref={ref}
        className={clsx(
          'px-2',
          'py-1',
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

TextArea.displayName = 'TextArea'

export default TextArea
