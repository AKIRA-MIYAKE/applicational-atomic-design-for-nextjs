import { VFC, useMemo } from 'react'

export interface TaskDeadlineTextProps {
  deadline: string
}

const TaskDeadlineText: VFC<TaskDeadlineTextProps> = ({ deadline }) => {
  const text = useMemo(() => {
    return new Date(deadline).toLocaleDateString()
  }, [deadline])

  return <>{text}</>
}

export default TaskDeadlineText
