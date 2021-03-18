import { VFC } from 'react'
import { UseFormMethods } from 'react-hook-form'

import { Task, TaskStatus } from '../../../interfaces'

import Label from '../../../atoms/Label'
import TextFiled from '../../../atoms/TextField'
import TextArea from '../../../atoms/TextArea'

import TaskStatusSelect from '../TaskStatusSelect'

export interface TaskFormBodyProps {
  formId: string
  useFormMethods: UseFormMethods<TaskFormBodyValues>
}

export interface TaskFormBodyValues {
  name?: string
  description?: string
  deadline?: Date
  stats?: TaskStatus
}

const TaskFormBody: VFC<TaskFormBodyProps> = ({ formId, useFormMethods }) => {
  const inputIds = {
    name: `${formId}_name`,
    description: `${formId}_description`,
    deadline: `${formId}_deadline`,
    status: `${formId}_status`
  }

  const { register } = useFormMethods

  return (
    <div>
      <div>
        <div>
          <Label htmlFor={inputIds.name}>Name</Label>
        </div>
        <div>
          <TextFiled
            type="text"
            name="title"
            placeholder="Task name"
            id={inputIds.name}
            form={formId}
            block={true}
            ref={register({ required: true })}
          />
        </div>
      </div>

      <div>
        <div>
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
            ref={register}
          />
        </div>
      </div>

      <div>
        <div>
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
            ref={register({ valueAsDate: true })}
          />
        </div>
      </div>

      <div>
        <div>
          <Label htmlFor={inputIds.status}>Status</Label>
        </div>
        <div>
          <TaskStatusSelect
            name="status"
            id={inputIds.status}
            form={formId}
            block={true}
            ref={register({ required: true })}
          />
        </div>
      </div>
    </div>
  )
}

export default TaskFormBody
