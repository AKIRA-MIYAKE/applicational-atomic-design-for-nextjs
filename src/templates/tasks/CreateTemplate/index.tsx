import { VFC, useMemo, useCallback } from 'react'
import { useRouter } from 'next/router'

import DefaultLayout from '../../../components/DefaultLayout'
import DefaultContainer from '../../../components/DefaultContainer'

import ContentHeader from '../../../molecules/commons/ContentHeader'
import ContentMain from '../../../molecules/commons/ContentMain'

import CreateTaskFrom, {
  CreateTaskFormProps,
} from '../../../organisms/tasks/CreateTaskForm'

const CreateTemplate: VFC = () => {
  const router = useRouter()

  const createFormId = useMemo(() => 'create_task', [])

  const onCreateFormSubmitSuccess = useCallback<
    CreateTaskFormProps['onSubmitSuccess']
  >(() => {
    router.push('/')
  }, []) // eslint-disable-line

  const onCreateFormSubmitFailure = useCallback<
    CreateTaskFormProps['onSubmitFailure']
  >((error) => {
    console.log(error)
  }, [])

  return (
    <DefaultLayout>
      <main>
        <ContentHeader heading="Create task" />

        <ContentMain>
          <DefaultContainer>
            <CreateTaskFrom
              formId={createFormId}
              onSubmitSuccess={onCreateFormSubmitSuccess}
              onSubmitFailure={onCreateFormSubmitFailure}
            />
          </DefaultContainer>
        </ContentMain>
      </main>
    </DefaultLayout>
  )
}

export default CreateTemplate
