import { VFC, useMemo, useCallback } from 'react'
import { useRouter } from 'next/router'

import { Task } from '../../../interfaces'

import DefaultLayout from '../../../components/DefaultLayout'
import DefaultContainer from '../../../components/DefaultContainer'

import ContentHeader from '../../../molecules/commons/ContentHeader'
import ContentMain from '../../../molecules/commons/ContentMain'

import EditTaskForm, {
  EditTaskFormProps,
} from '../../../organisms/tasks/EditTaskForm'

export interface EditTemplateProps {
  task: Task
}

const EditTemplate: VFC<EditTemplateProps> = ({ task }) => {
  const router = useRouter()

  const editFormId = useMemo(() => `edit_task_${task.id}`, [task])

  const onEditFormSubmitSuccess = useCallback<
    EditTaskFormProps['onSubmitSuccess']
  >(() => {
    router.push(`/tasks/${task.id}`)
  }, [task]) // eslint-disable-line

  const onEditFormSubmitFailure = useCallback<
    EditTaskFormProps['onSubmitFailure']
  >((error) => {
    console.log(error)
  }, [])

  return (
    <DefaultLayout>
      <main>
        <ContentHeader heading="Edit task" />

        <ContentMain>
          <DefaultContainer>
            <EditTaskForm
              task={task}
              formId={editFormId}
              onSubmitSuccess={onEditFormSubmitSuccess}
              onSubmitFailure={onEditFormSubmitFailure}
            />
          </DefaultContainer>
        </ContentMain>
      </main>
    </DefaultLayout>
  )
}

export default EditTemplate
