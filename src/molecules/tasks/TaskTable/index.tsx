import { VFC } from 'react'

import { Task } from '../../../interfaces'

import TaskTableRow from '../TaskTableRow'

export interface TaskTableProps {
  tasks: Task[]
}

const TaskTable: VFC<TaskTableProps> = ({ tasks }) => {
  return (
    <table className="table-auto w-full">
      <thead>
        <tr className="border-b-2">
          <th className="p-2 text-left w-1/2">Name</th>
          <th className="p-2 text-left">Deadline</th>
          <th className="p-2 text-left">Status</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task) => (
          <TaskTableRow key={task.id} task={task} />
        ))}
      </tbody>
    </table>
  )
}

export default TaskTable
