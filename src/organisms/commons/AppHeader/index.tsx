import { VFC } from 'react'
import Link from 'next/link'
import clsx from 'clsx'

import { useAuthContext } from '../../../contexts/AuthContext'

import SignInButton from '../SignInButton'
import SignOutButton from '../SignOutButton'

import { focusClasses } from '../../../styles/class-values'

const AppHeader: VFC = () => {
  const { isSignedIn, user } = useAuthContext()

  return (
    <header className="w-full h-12 bg-indigo-500 fixed">
      <div className="container mx-auto px-4 h-full flex flex-row justify-between items-center">
        <div>
          <Link href="/">
            <a
              className={clsx(
                'text-lg',
                'text-white',
                'rounded-md',
                'hover:text-opacity-75',
                focusClasses,
                'block'
              )}
            >
              <div>Applicational Atomic Design</div>
            </a>
          </Link>
        </div>

        <div>
          <div className="flex flex-row items-center">
            {user && user.role === 'ADMIN' && (
              <div className="mr-4">
                <Link href="/admin">
                  <a
                    className={clsx(
                      'text-white',
                      'rounded-md',
                      'hover:text-opacity-75',
                      focusClasses,
                      'block'
                    )}
                  >
                    Admin
                  </a>
                </Link>
              </div>
            )}
            <div>{!isSignedIn ? <SignInButton /> : <SignOutButton />}</div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default AppHeader
