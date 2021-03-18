export interface User {
  nickname: string
  role: UserRole
}

export const USER_ROLES = {
  Admin: 'ADMIN',
  General: 'GENERAL',
} as const

export type UserRole = typeof USER_ROLES[keyof typeof USER_ROLES]

export interface Task {
  id: string
  name: string
  description?: string
  deadline?: string
  status: TaskStatus
}

export const TASK_STATUSES = {
  New: 'NEW',
  Canceled: 'CANCELED',
  Waiting: 'WAITING',
  Doing: 'DOING',
  Pending: 'PENDING',
  Postponed: 'POSTPONED',
  Done: 'DONE',
} as const

export type TaskStatus = typeof TASK_STATUSES[keyof typeof TASK_STATUSES]

export function isTaskStatus(value: string): asserts value is TaskStatus {
  const matched = Object.entries(TASK_STATUSES).some((kv) => kv[1] === value)
  if (!matched) {
    throw new Error()
  }
}
