import { VFC, useMemo } from 'react'

import { TaskStatus, TASK_STATUSES } from '../../../interfaces'

export interface TaskStatusTextProps {
  status: TaskStatus
}

const TaskStatusText: VFC<TaskStatusTextProps> = ({ status }) => {
  const text = useMemo(() => {
    const kv = Object.entries(TASK_STATUSES).find((kv) => kv[1] === status)

    if (!kv) {
      return 'Unknown'
    }

    return kv[0]
  }, [status])

  return <>{text}</>
}

export default TaskStatusText
