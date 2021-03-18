import { VFC, ReactNode } from 'react'

export interface PublicRootProps {
  children: ReactNode
}

const PublicRoot: VFC<PublicRootProps> = ({ children }) => {
  return <>{children}</>
}

export default PublicRoot
