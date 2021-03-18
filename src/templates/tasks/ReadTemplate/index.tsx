import { VFC, useMemo, useCallback } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { Task } from '../../../interfaces'

import { useAuthContext } from '../../../contexts/AuthContext'

import { useDeleteTask } from '../../../hooks/api/tasks'

import DefaultLayout from '../../../components/DefaultLayout'
import DefaultContainer from '../../../components/DefaultContainer'

import AnchorButtonPrimary from '../../../atoms/AnchorButtonPrimary'
import ButtonDanger from '../../../atoms/ButtonDanger'

import ContentHeader from '../../../molecules/commons/ContentHeader'
import ContentMain from '../../../molecules/commons/ContentMain'

import TaskDeadlineText from '../../../molecules/tasks/TaskDeadlineText'
import TaskStatusText from '../../../molecules/tasks/TaskStatusText'

export interface AdminActionAreaProps {
  task: Task
}

export const AdminActionArea: VFC<AdminActionAreaProps> = ({ task }) => {
  const router = useRouter()

  const { isValidating, deleteTask } = useDeleteTask()

  const isDeleteButtonDisabled = useMemo(() => {
    return isValidating
  }, [isValidating])

  const onDeleteButtonClick = useCallback(() => {
    ;(async () => {
      const { error } = await deleteTask({ id: task.id })

      if (error) {
        console.log(error)
        return
      }

      router.push('/')
    })()
  }, [task, deleteTask]) // eslint-disable-line

  return (
    <>
      <div className="flex flex-row">
        <div className="mr-2">
          <ButtonDanger
            disabled={isDeleteButtonDisabled}
            onClick={onDeleteButtonClick}
          >
            Delete
          </ButtonDanger>
        </div>
        <div>
          <Link href={`/tasks/${task.id}?edit=true`} passHref>
            <AnchorButtonPrimary>Edit</AnchorButtonPrimary>
          </Link>
        </div>
      </div>
    </>
  )
}

export interface ReadTemplateProps {
  task: Task
}

const ReadTemplate: VFC<ReadTemplateProps> = ({ task }) => {
  const { user } = useAuthContext()

  if (!user) {
    throw new Error('Never')
  }

  return (
    <DefaultLayout>
      <main>
        <ContentHeader
          heading={task.name}
          actionArea={
            user.role === 'ADMIN' ? (
              <AdminActionArea task={task} />
            ) : (
              <Link href={`/tasks/${task.id}?edit=true`} passHref>
                <AnchorButtonPrimary>Edit</AnchorButtonPrimary>
              </Link>
            )
          }
        />

        <ContentMain>
          <DefaultContainer>
            <div className="mb-3">
              <div className="mb-2 px-2 py-1 border-b">
                <span className="text-sm">Description</span>
              </div>
              <div className="px-2 py-1">
                {task.description ? (
                  <span>{task.description}</span>
                ) : (
                  <span className="italic">None</span>
                )}
              </div>
            </div>

            <div className="mb-3">
              <div className="mb-2 px-2 py-1 border-b">
                <span className="text-sm">Deadline</span>
              </div>
              <div className="px-2 py-1">
                {task.deadline ? (
                  <span>
                    <TaskDeadlineText deadline={task.deadline} />
                  </span>
                ) : (
                  <span className="italic">None</span>
                )}
              </div>
            </div>

            <div>
              <div className="mb-2 px-2 py-1 border-b">
                <span className="text-sm">Status</span>
              </div>
              <div className="px-2 py-1">
                <span>
                  <TaskStatusText status={task.status} />
                </span>
              </div>
            </div>
          </DefaultContainer>
        </ContentMain>
      </main>
    </DefaultLayout>
  )
}

export default ReadTemplate
