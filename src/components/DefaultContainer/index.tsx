import { VFC, ReactNode } from 'react'

export interface DefaultContainerProps {
  children?: ReactNode
}

const DefaultContainer: VFC<DefaultContainerProps> = ({ children }) => {
  return <div className="container mx-auto px-4">{children}</div>
}

export default DefaultContainer
