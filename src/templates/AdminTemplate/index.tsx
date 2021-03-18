import { VFC } from 'react'

import DefaultLayout from '../../components/DefaultLayout'
import DefaultContainer from '../../components/DefaultContainer'

import ContentHeader from '../../molecules/commons/ContentHeader'
import ContentMain from '../../molecules/commons/ContentMain'

const AdminTemplate: VFC = () => {
  return (
    <DefaultLayout>
      <main>
        <ContentHeader heading="Admin" />

        <ContentMain>
          <DefaultContainer>
            <p>This page can only be accessed by those with an admin role.</p>
          </DefaultContainer>
        </ContentMain>
      </main>
    </DefaultLayout>
  )
}

export default AdminTemplate
