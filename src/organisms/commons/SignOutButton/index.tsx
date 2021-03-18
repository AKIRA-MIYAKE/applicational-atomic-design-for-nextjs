import { VFC, useCallback } from 'react'
import { useRouter } from 'next/router'
import clsx from 'clsx'

import { useAuthContext } from '../../../contexts/AuthContext'

import { focusClasses } from '../../../styles/class-values'

const SignOutButton: VFC = () => {
  const router = useRouter()

  const { signOut } = useAuthContext()

  const onButtonClick = useCallback(() => {
    signOut()
    router.push('/signin')
  }, [signOut]) // eslint-disable-line

  return (
    <button
      onClick={onButtonClick}
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
        'items-center'
      )}
    >
      Sign Out
    </button>
  )
}

export default SignOutButton
