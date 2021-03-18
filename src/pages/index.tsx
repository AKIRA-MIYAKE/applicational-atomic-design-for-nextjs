import { NextPage } from 'next'

import PrivateRoot from '../components/PrivateRoot'

import TaskListTemplate from '../templates/tasks/ListTemplate'

const IndexPage: NextPage = () => {
  return (
    <PrivateRoot>
      <TaskListTemplate />
    </PrivateRoot>
  )
}

export default IndexPage
