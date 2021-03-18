import { NextPage } from 'next'

import PrivateRoot from '../../components/PrivateRoot'

import CreateTemplate from '../../templates/tasks/CreateTemplate'

const CreatePage: NextPage = () => {
  return (
    <PrivateRoot>
      <CreateTemplate />
    </PrivateRoot>
  )
}

export default CreatePage
