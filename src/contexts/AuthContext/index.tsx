import {
  VFC,
  ReactNode,
  createContext,
  useState,
  useMemo,
  useCallback,
  useContext,
} from 'react'

import { User } from '../../interfaces'

const _users: (User & { password: string })[] = [
  {
    nickname: 'alice',
    role: 'ADMIN',
    password: 'BlueRose',
  },
  {
    nickname: 'bob',
    role: 'GENERAL',
    password: 'Passw0rd!',
  },
  {
    nickname: 'carol',
    role: 'GENERAL',
    password: 'Passw0rd!',
  },
]

export interface AuthContextValue {
  isSignedIn: boolean
  user?: User
  signIn: (params: {
    nickname: string
    password: string
  }) => Promise<{ data?: User; error?: Error }>
  signOut: () => void
}

const AuthContext = createContext<AuthContextValue>({
  isSignedIn: false,
  user: undefined,
  signIn: () => Promise.reject(),
  signOut: () => {}, // eslint-disable-line
})

export interface AuthContextProviderProps {
  children: ReactNode
}

export const AuthContextProvider: VFC<AuthContextProviderProps> = ({
  children,
}) => {
  const [user, setUser] = useState<User | undefined>(undefined)

  const isSignedIn = useMemo(() => {
    return !!user
  }, [user])

  const signIn = useMemo<AuthContextValue['signIn']>(() => {
    return async ({ nickname, password }) => {
      const _user = _users.find(
        (user) => user.nickname === nickname && user.password === password
      )

      if (!_user) {
        return { error: new Error() }
      }

      const user: User = {
        nickname: _user.nickname,
        role: _user.role,
      }

      setUser(user)

      return { data: user }
    }
  }, [])

  const signOut = useCallback<AuthContextValue['signOut']>(() => {
    setUser(undefined)
  }, [])

  return (
    <AuthContext.Provider
      value={{
        isSignedIn,
        user,
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuthContext: () => AuthContextValue = () => {
  const authContextValue = useContext(AuthContext)

  return authContextValue
}
