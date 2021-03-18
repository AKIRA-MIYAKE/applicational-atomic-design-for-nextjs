import { DetailedHTMLProps, LabelHTMLAttributes, forwardRef } from 'react'
import clsx from 'clsx'

export type LabelProps = DetailedHTMLProps<
  LabelHTMLAttributes<HTMLLabelElement>,
  HTMLLabelElement
> & {
  srOnly?: boolean
}

const Label = forwardRef<HTMLLabelElement, LabelProps>(
  ({ srOnly, ...props }, ref) => {
    return (
      // eslint-disable-next-line
      <label
        {...props}
        ref={ref}
        className={clsx(
          // sr-only
          srOnly && 'sr-only'
        )}
      />
    )
  }
)

Label.displayName = 'Label'

export default Label
