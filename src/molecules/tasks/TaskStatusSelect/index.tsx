import { forwardRef } from 'react'

import { TaskStatus, TASK_STATUSES } from '../../../interfaces'

import Select, { SelectProps } from '../../../atoms/Select'

export type TaskStatusSelectProps = Omit<SelectProps, 'children'> & {
  value?: TaskStatus
}

const TaskStatusSelect = forwardRef<HTMLSelectElement, TaskStatusSelectProps>(
  (props, ref) => {
    return (
      <Select {...props} ref={ref}>
        {Object.entries(TASK_STATUSES).map(([key, value]) => (
          <option key={key} value={value}>
            {key}
          </option>
        ))}
      </Select>
    )
  }
)

TaskStatusSelect.displayName = 'TaskStatusSelect'

export default TaskStatusSelect
