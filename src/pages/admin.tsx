import { useCallback } from 'react'
import { NextPage } from 'next'

import { useAuthContext } from '../contexts/AuthContext'

import PrivateRoot from '../components/PrivateRoot'

import AdminTemplate from '../templates/AdminTemplate'

const AdminPage: NextPage = () => {
  const { user } = useAuthContext()

  const checkIsAccessible = useCallback(() => {
    if (!user) {
      return false
    }

    return user.role === 'ADMIN'
  }, [user])

  return (
    <PrivateRoot checkIsAccessible={checkIsAccessible}>
      <AdminTemplate />
    </PrivateRoot>
  )
}

export default AdminPage
