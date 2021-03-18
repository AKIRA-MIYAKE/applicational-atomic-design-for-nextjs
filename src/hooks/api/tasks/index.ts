import { useState, useMemo } from 'react'
import useSWR, { mutate } from 'swr'
import { v4 as UUID } from 'uuid'

import { Task } from '../../../interfaces'

import { useAuthContext } from '../../../contexts/AuthContext'

// Dummy api methods.
let _tasks: Task[] = [
  {
    id: '4aaffe69-7e45-481c-9af0-20f33d174870',
    name: 'Second task',
    status: 'NEW',
  },
  {
    id: 'bb0c3723-83d3-4ac1-832d-709c962d0fb6',
    name: 'First task',
    description: 'This is first task',
    deadline: '2021-12-31',
    status: 'NEW',
  },
]

const _listTask: () => Promise<Task[]> = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(_tasks)
    }, 500)
  })
}

const _createTask: (params: { values: Omit<Task, 'id'> }) => Promise<Task> = ({
  values,
}) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const created: Task = { id: UUID(), ...values }
      _tasks = [created, ..._tasks]
      resolve(created)
    }, 500)
  })
}

const _readTask: (params: { id: string }) => Promise<Task> = ({ id }) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const task = _tasks.find((task) => task.id === id)
      if (!task) {
        reject(new Error('Not Found'))
        return
      }

      resolve(task)
    }, 500)
  })
}

const _updateTask: (params: {
  id: string
  values: Omit<Task, 'id'>
}) => Promise<Task> = ({ id, values }) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const task = _tasks.find((task) => task.id === id)
      if (!task) {
        reject(new Error('Not Found'))
        return
      }

      const updated = { id: task.id, ...values }

      _tasks = [updated, ..._tasks.filter((task) => task.id !== id)]

      resolve(updated)
    }, 500)
  })
}

const _deleteTask: (params: { id: string }) => Promise<void> = ({ id }) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const task = _tasks.find((task) => task.id === id)
      if (!task) {
        reject(new Error('Not Found'))
        return
      }

      _tasks = _tasks.filter((task) => task.id !== id)
      resolve()
    }, 500)
  })
}

export interface UseListTaskParams {
  isDisabled?: boolean
}

export interface UseListTaskValue {
  data?: Task[]
  error?: Error
  isValidating: boolean
  mutate: () => void
}

export const useListTask: (params?: UseListTaskParams) => UseListTaskValue = ({
  isDisabled,
} = {}) => {
  const { isSignedIn } = useAuthContext()

  const { data, error, isValidating, mutate } = useSWR<Task[], Error>(
    !isDisabled && isSignedIn ? '/api/tasks' : null,
    async () => {
      return _listTask()
    }
  )

  return { data, error, isValidating, mutate } as UseListTaskValue
}

export interface UseReadTaskParams {
  id: string
  isDisabled?: boolean
}

export interface UseReadTaskValue {
  data?: Task
  error?: Error
  isValidating: boolean
  mutate: () => void
}

export const useReadTask: (params: UseReadTaskParams) => UseReadTaskValue = ({
  id,
  isDisabled,
}) => {
  const { isSignedIn } = useAuthContext()

  const { data, error, isValidating, mutate } = useSWR<Task, Error>(
    !isDisabled && isSignedIn ? ['/api/tasks', id] : null,
    async () => {
      return _readTask({ id })
    }
  )

  return { data, error, isValidating, mutate }
}

export interface UseCreateTaskValue {
  isValidating: boolean
  createTask: (params: {
    values: Omit<Task, 'id'>
  }) => Promise<{ data?: Task; error?: Error }>
}

export const useCreateTask: () => UseCreateTaskValue = () => {
  const { isSignedIn } = useAuthContext()

  const [isValidating, setIsValidating] = useState(false)

  const createTask = useMemo<UseCreateTaskValue['createTask']>(() => {
    return async ({ values }) => {
      setIsValidating(true)

      if (!isSignedIn) {
        setIsValidating(false)
        return { error: new Error() }
      }

      try {
        const created = await _createTask({ values })

        await mutate(
          '/api/tasks',
          async (tasks?: Task[]) => {
            if (!tasks) {
              return [created]
            }

            return [created, ...tasks]
          },
          false
        )

        return { data: created }
      } catch (error) {
        return { error }
      } finally {
        setIsValidating(false)
      }
    }
  }, [isSignedIn])

  return { isValidating, createTask }
}

export interface UseUpdateTaskValue {
  isValidating: boolean
  updateTask: (params: {
    id: string
    values: Omit<Task, 'id'>
  }) => Promise<{ data?: Task; error?: Error }>
}

export const useUpdateTask: () => UseUpdateTaskValue = () => {
  const { isSignedIn } = useAuthContext()

  const [isValidating, setIsValidating] = useState(false)

  const updateTask = useMemo<UseUpdateTaskValue['updateTask']>(() => {
    return async ({ id, values }) => {
      setIsValidating(true)

      if (!isSignedIn) {
        setIsValidating(false)
        return { error: new Error() }
      }

      try {
        const updated = await mutate(['/api/tasks', id], async () => {
          return _updateTask({ id, values })
        })

        await mutate(
          '/api/tasks',
          async (tasks?: Task[]) => {
            if (!tasks) {
              return [updated]
            }

            return [updated, ...tasks.filter((task) => task.id !== id)]
          },
          false
        )

        return { data: updated }
      } catch (error) {
        return { error }
      } finally {
        setIsValidating(false)
      }
    }
  }, [isSignedIn])

  return { isValidating, updateTask }
}

export interface UseDeleteTaskValue {
  isValidating: boolean
  deleteTask: (params: { id: string }) => Promise<{ error?: Error }>
}

export const useDeleteTask: () => UseDeleteTaskValue = () => {
  const { isSignedIn } = useAuthContext()

  const [isValidating, setIsValidating] = useState(false)

  const deleteTask = useMemo<UseDeleteTaskValue['deleteTask']>(() => {
    return async ({ id }) => {
      setIsValidating(true)

      if (!isSignedIn) {
        setIsValidating(false)
        return { error: new Error() }
      }

      try {
        await _deleteTask({ id })

        await mutate(
          '/api/tasks',
          async (tasks?: Task[]) => {
            if (!tasks) {
              return []
            }

            return tasks.filter((task) => task.id !== id)
          },
          false
        )
        return {}
      } catch (error) {
        return { error }
      } finally {
        setIsValidating(false)
      }
    }
  }, [isSignedIn])

  return { isValidating, deleteTask }
}
