import { VFC, useCallback } from 'react'

import { useListTask } from '../../../hooks/api/tasks'

import ButtonSecondary from '../../../atoms/ButtonSecondary'

import TaskTable from '../../../molecules/tasks/TaskTable'

const ConnectedTaskTable: VFC = () => {
  const { data, error, mutate } = useListTask()

  const onRetryButtonClick = useCallback(() => {
    mutate()
  }, [mutate])

  if (error) {
    return (
      <div>
        <p className="mb-2">Error occured</p>
        <ButtonSecondary onClick={onRetryButtonClick}>Retry</ButtonSecondary>
      </div>
    )
  }

  if (!data) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    )
  }

  return <TaskTable tasks={data} />
}

export default ConnectedTaskTable
