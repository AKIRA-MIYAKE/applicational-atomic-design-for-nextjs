import { NextPage } from 'next'

import PublicRoot from '../components/PublicRoot'

import AboutTemplate from '../templates/AboutTemplate'

const AboutPage: NextPage = () => {
  return (
    <PublicRoot>
      <AboutTemplate />
    </PublicRoot>
  )
}

export default AboutPage
