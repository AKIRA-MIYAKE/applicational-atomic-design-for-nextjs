import { VFC, ReactNode } from 'react'

export interface ContainerProps {
  children?: ReactNode
}

const Container: VFC<ContainerProps> = ({ children }) => {
  return <div className="container mx-auto px-4">{children}</div>
}

export default Container
