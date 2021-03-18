import { VFC, useMemo } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import clsx from 'clsx'

import { focusClasses } from '../../../styles/class-values'

const SignInButton: VFC = () => {
  const { asPath } = useRouter()

  const signInUrl = useMemo(() => {
    if (asPath === '/') {
      return '/signin'
    } else {
      return `/signin?redirect=${asPath}`
    }
  }, [asPath])

  return (
    <Link href={signInUrl}>
      <a
        className={clsx(
          'h-9',
          'px-3',
          'text-white',
          'bg-transparent',
          'border',
          'border-white',
          'rounded-md',
          // transition
          'transition',
          // hover
          'hover:bg-white',
          'hover:text-indigo-500',
          // focus
          focusClasses,
          // centering text
          'justify-center',
          'items-center',
          //block
          'inline-flex'
        )}
      >
        Sign In
      </a>
    </Link>
  )
}

export default SignInButton
