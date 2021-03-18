import { VFC } from 'react'
import Link from 'next/link'

import DefaultLayout from '../../../components/DefaultLayout'
import DefaultContainer from '../../../components/DefaultContainer'

import AnchorButtonPrimary from '../../../atoms/AnchorButtonPrimary'

import ContentHeader from '../../../molecules/commons/ContentHeader'
import ContentMain from '../../../molecules/commons/ContentMain'

import ConnectedTaskTable from '../../../organisms/tasks/ConnectedTaskTable'

const ListTemplate: VFC = () => {
  return (
    <DefaultLayout>
      <main>
        <ContentHeader
          heading="Tasks"
          actionArea={
            <Link href="/tasks/create" passHref>
              <AnchorButtonPrimary>Create</AnchorButtonPrimary>
            </Link>
          }
        />

        <ContentMain>
          <DefaultContainer>
            <ConnectedTaskTable />
          </DefaultContainer>
        </ContentMain>
      </main>
    </DefaultLayout>
  )
}

export default ListTemplate
