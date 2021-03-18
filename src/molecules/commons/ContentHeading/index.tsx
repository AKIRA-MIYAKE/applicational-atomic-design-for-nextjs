import { VFC } from 'react'

export interface ContentHeadingProps {
  heading: string
}

const ContentHeading: VFC<ContentHeadingProps> = ({ heading }) => {
  return (
    <h1 className="pl-4 text-2xl border-l-4 border-indigo-500">{heading}</h1>
  )
}

export default ContentHeading
