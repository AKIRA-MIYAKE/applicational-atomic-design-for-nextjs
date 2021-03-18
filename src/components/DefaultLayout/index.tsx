import { VFC, ReactNode } from 'react'

import AppHeader from '../../organisms/commons/AppHeader'

export interface DefaultLayoutProps {
  children: ReactNode
}

const DefaultLayout: VFC<DefaultLayoutProps> = ({ children }) => {
  return (
    <div className="h-full">
      <AppHeader />

      {/* Spacer */}
      <div className="h-12" />
      {children}
    </div>
  )
}

export default DefaultLayout
