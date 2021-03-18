import { VFC } from 'react'

import DefaultLayout from '../../components/DefaultLayout'
import DefaultContainer from '../../components/DefaultContainer'

const LoadingTemplate: VFC = () => {
  return (
    <DefaultLayout>
      <main>
        <DefaultContainer>
          <div className="py-4">Loading...</div>
        </DefaultContainer>
      </main>
    </DefaultLayout>
  )
}

export default LoadingTemplate
