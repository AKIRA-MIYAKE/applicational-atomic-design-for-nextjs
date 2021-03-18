import { VFC, ReactNode } from 'react'

export interface ContentMainProps {
  children: ReactNode
}

const ContentMain: VFC<ContentMainProps> = ({ children }) => {
  return <div className="mb-10">{children}</div>
}

export default ContentMain
