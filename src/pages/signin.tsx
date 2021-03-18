import { NextPage, GetServerSideProps } from 'next'
import { ParsedUrlQuery } from 'node:querystring'

import PublicRoot from '../components/PublicRoot'

import SignInTemplate from '../templates/SignInTemplate'

interface PageQuery extends ParsedUrlQuery {
  redirect?: string
}

function isPageQuery(query: ParsedUrlQuery): asserts query is PageQuery {
  if (
    typeof query['redirect'] !== 'undefined' &&
    typeof query['redirect'] !== 'string'
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

const SignInPage: NextPage<PageProps> = ({ query }) => {
  const { redirect } = query

  return (
    <PublicRoot>
      <SignInTemplate redirect={redirect} />
    </PublicRoot>
  )
}

export default SignInPage
