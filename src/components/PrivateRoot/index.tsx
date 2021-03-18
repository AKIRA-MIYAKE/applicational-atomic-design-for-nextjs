import { VFC, ReactNode } from 'react'
import { useRouter } from 'next/router'
import ErrorPage from 'next/error'

import { useAuthContext } from '../../contexts/AuthContext'

import { useIsBrowser } from '../../hooks/env'

import LoadingTemplate from '../../templates/LoadingTemplate'

export interface PrivateRootProps {
  children: ReactNode
  checkIsAccessible?: () => boolean
}

const PrivateRoot: VFC<PrivateRootProps> = ({
  children,
  checkIsAccessible,
}) => {
  const router = useRouter()

  const { isSignedIn } = useAuthContext()

  const isBrowser = useIsBrowser()

  if (!isBrowser) {
    return <LoadingTemplate />
  }

  if (!isSignedIn) {
    const signInUrl =
      router.asPath === '/' ? '/signin' : `/signin?redirect=${router.asPath}`

    router.push(signInUrl)
    return <LoadingTemplate />
  }

  if (checkIsAccessible) {
    if (!checkIsAccessible()) {
      return <ErrorPage statusCode={403} />
    }
  }

  return <>{children}</>
}

export default PrivateRoot
