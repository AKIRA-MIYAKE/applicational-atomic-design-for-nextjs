import { VFC, useMemo } from 'react'
import { UseFormMethods } from 'react-hook-form'

import { TaskStatus } from '../../../interfaces'

import Label from '../../../atoms/Label'
import TextFiled from '../../../atoms/TextField'
import TextArea from '../../../atoms/TextArea'

import TaskStatusSelect from '../TaskStatusSelect'

export interface TaskFormBodyProps {
  formId: string
  useFormMethods: UseFormMethods<TaskFormValues>
}

export interface TaskFormValues {
  name?: string
  description?: string
  deadline?: string
  status?: TaskStatus
}

const TaskFormBody: VFC<TaskFormBodyProps> = ({ formId, useFormMethods }) => {
  const inputIds = useMemo(() => {
    return {
      name: `${formId}_name`,
      description: `${formId}_description`,
      deadline: `${formId}_deadline`,
      status: `${formId}_status`,
    }
  }, [formId])

  const { register, errors } = useFormMethods

  return (
    <div>
      <div className="mb-3">
        <div className="mb-1">
          <Label htmlFor={inputIds.name}>Name</Label>
        </div>
        <div>
          <TextFiled
            type="text"
            name="name"
            placeholder="Task name"
            id={inputIds.name}
            form={formId}
            block={true}
            error={!!errors.name}
            ref={register({ required: true })}
          />
        </div>
      </div>

      <div className="mb-3">
        <div className="mb-1">
          <Label htmlFor={inputIds.description}>Description</Label>
        </div>
        <div>
          <TextArea
            name="description"
            placeholder="Description"
            rows={3}
            id={inputIds.description}
            form={formId}
            block={true}
            error={!!errors.description}
            ref={register}
          />
        </div>
      </div>

      <div className="mb-3">
        <div className="mb-1">
          <Label htmlFor={inputIds.deadline}>Deadline</Label>
        </div>
        <div>
          <TextFiled
            type="date"
            name="deadline"
            placeholder="Deadline"
            id={inputIds.deadline}
            form={formId}
            block={true}
            error={!!errors.deadline}
            ref={register({ pattern: /\d{4}-\d{2}-\d{2}/ })}
          />
        </div>
      </div>

      <div>
        <div className="mb-1">
          <Label htmlFor={inputIds.status}>Status</Label>
        </div>
        <div>
          <TaskStatusSelect
            name="status"
            id={inputIds.status}
            form={formId}
            block={true}
            error={!!errors.status}
            ref={register({ required: true })}
          />
        </div>
      </div>
    </div>
  )
}

export default TaskFormBody
