import { NextPage, GetServerSideProps } from 'next'
import ErrorPage from 'next/error'
import { ParsedUrlQuery } from 'node:querystring'

import { useReadTask } from '../../../hooks/api/tasks'

import PrivateRoot from '../../../components/PrivateRoot'

import ReadTemplate from '../../../templates/tasks/ReadTemplate'
import EditTemplate from '../../../templates/tasks/EditTemplate'
import LoadingTemplate from '../../../templates/LoadingTemplate'

interface PageQuery extends ParsedUrlQuery {
  task_id: string
  edit?: string
}

function isPageQuery(query: ParsedUrlQuery): asserts query is PageQuery {
  if (typeof query['task_id'] !== 'string') {
    throw new Error()
  }

  if (
    typeof query['edit'] !== 'undefined' &&
    (typeof query['edit'] !== 'string' || query['edit'] !== 'true')
  ) {
    throw new Error()
  }
}

interface PageProps {
  query: PageQuery
}

export const getServerSideProps: GetServerSideProps<
  PageProps,
  PageQuery
> = async (context) => {
  const { query } = context

  isPageQuery(query)

  return {
    props: { query },
  }
}

const ReadPage: NextPage<PageProps> = ({ query }) => {
  const { task_id, edit } = query

  const { data, error } = useReadTask({ id: task_id })

  return (
    <PrivateRoot>
      {(() => {
        if (error) {
          return <ErrorPage statusCode={404} />
        }

        if (!data) {
          return <LoadingTemplate />
        }

        if (edit === 'true') {
          return <EditTemplate task={data} />
        } else {
          return <ReadTemplate task={data} />
        }
      })()}
    </PrivateRoot>
  )
}

export default ReadPage
