import { VFC, useMemo, useCallback } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'

import { Task } from '../../../interfaces'

import { useUpdateTask } from '../../../hooks/api/tasks'

import ButtonPrimary from '../../../atoms/ButtonPrimary'

import TaskFormBody, {
  TaskFormValues,
} from '../../../molecules/tasks/TaskFormBody'

export interface EditTaskFormProps {
  task: Task
  formId: string
  onSubmitSuccess: () => void
  onSubmitFailure: (error: Error) => void
}

const EditTaskForm: VFC<EditTaskFormProps> = ({
  task,
  formId,
  onSubmitSuccess,
  onSubmitFailure,
}) => {
  const useFormMethods = useForm<TaskFormValues>({
    defaultValues: task,
  })

  const { handleSubmit, watch } = useFormMethods
  const watchedValues = watch()

  const { isValidating, updateTask } = useUpdateTask()

  const isSubmitButtonDisabled = useMemo(() => {
    if (
      typeof watchedValues.name === 'undefined' ||
      typeof watchedValues.description === 'undefined' ||
      typeof watchedValues.deadline === 'undefined' ||
      typeof watchedValues.status === 'undefined'
    ) {
      return true
    }

    if (watchedValues.name.length === 0) {
      return true
    }

    if (isValidating) {
      return true
    }

    return false
  }, [watchedValues, isValidating])

  const onFormSubmit = useCallback<SubmitHandler<TaskFormValues>>(
    (values) => {
      ;(async () => {
        if (
          typeof values.name === 'undefined' ||
          typeof values.description === 'undefined' ||
          typeof values.deadline === 'undefined' ||
          typeof values.status === 'undefined'
        ) {
          return
        }

        const paramsValues = {
          name: values.name,
          description:
            values.description.length > 0 ? values.description : undefined,
          deadline: values.deadline.length > 0 ? values.deadline : undefined,
          status: values.status,
        }

        const { error } = await updateTask({
          id: task.id,
          values: paramsValues,
        })

        if (error) {
          onSubmitFailure(error)
          return
        }

        onSubmitSuccess()
      })()
    },
    [task, onSubmitSuccess, onSubmitFailure, updateTask]
  )

  return (
    <form id={formId} onSubmit={handleSubmit(onFormSubmit)}>
      <div className="mb-5">
        <TaskFormBody formId={formId} useFormMethods={useFormMethods} />
      </div>
      <div>
        <ButtonPrimary type="submit" disabled={isSubmitButtonDisabled}>
          Update
        </ButtonPrimary>
      </div>
    </form>
  )
}

export default EditTaskForm
