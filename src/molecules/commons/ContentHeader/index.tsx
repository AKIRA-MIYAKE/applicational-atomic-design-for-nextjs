import { VFC, ReactNode } from 'react'

import DefaultContainer from '../../../components/DefaultContainer'

import ContentHeading, { ContentHeadingProps } from '../ContentHeading'

export type ContentHeaderProps = ContentHeadingProps & {
  actionArea?: ReactNode
}

const ContentHeader: VFC<ContentHeaderProps> = ({ heading, actionArea }) => {
  return (
    <DefaultContainer>
      <div className="my-4 h-12 flex flex-row justify-between items-center">
        <ContentHeading heading={heading} />

        {actionArea && <div>{actionArea}</div>}
      </div>
    </DefaultContainer>
  )
}

export default ContentHeader
