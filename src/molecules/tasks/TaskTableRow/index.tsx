import { VFC } from 'react'
import Link from 'next/link'

import { Task } from '../../../interfaces'

import Anchor from '../../../atoms/Anchor'

import TaskDeadlineText from '../TaskDeadlineText'
import TaskStatusText from '../TaskStatusText'

export interface TaskTableRowProps {
  task: Task
}

const TaskTableRow: VFC<TaskTableRowProps> = ({ task }) => {
  return (
    <tr className="border-b last:border-b-0 hover:bg-gray-50">
      <td className="p-2">
        <Link href={`/tasks/${task.id}`} passHref>
          <Anchor>{task.name}</Anchor>
        </Link>
      </td>
      <td className="p-2 text-sm">
        {task.deadline && <TaskDeadlineText deadline={task.deadline} />}
      </td>
      <td className="p-2 text-sm">
        <TaskStatusText status={task.status} />
      </td>
    </tr>
  )
}

export default TaskTableRow
