import { VFC, useMemo } from 'react'

import { TaskStatus, TASK_STATUSES } from '../../../interfaces'

export interface TaskStatusTextProps {
  status: TaskStatus
}

const TaskStatusText: VFC<TaskStatusTextProps> = ({ status }) => {
  const text = useMemo(() => {
    return Object.entries(TASK_STATUSES).find((kv) => kv[1] === status)[0]
  }, [status])

  return <>{text}</>
}

export default TaskStatusText
