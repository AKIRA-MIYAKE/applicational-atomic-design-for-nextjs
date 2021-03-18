import { DetailedHTMLProps, AnchorHTMLAttributes, forwardRef } from 'react'
import clsx from 'clsx'

import { focusClasses } from '../../styles'

export type AnchorProps = DetailedHTMLProps<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>

const Anchor = forwardRef<HTMLAnchorElement, AnchorProps>((props, ref) => {
  return (
    // eslint-disable-next-line
    <a
      {...props}
      ref={ref}
      className={clsx(
        'text-indigo-700',
        // hover
        'hover:text-indigo-800',
        'hover:underline',
        // focus
        focusClasses
      )}
    />
  )
})

Anchor.displayName = 'Anchor'

export default Anchor
