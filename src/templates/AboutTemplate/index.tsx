import { VFC } from 'react'

import DefaultLayout from '../../components/DefaultLayout'
import DefaultContainer from '../../components/DefaultContainer'

import Anchor from '../../atoms/Anchor'

import ContentHeader from '../../molecules/commons/ContentHeader'
import ContentMain from '../../molecules/commons/ContentMain'

const AboutTemplate: VFC = () => {
  return (
    <DefaultLayout>
      <main>
        <ContentHeader heading="About" />

        <ContentMain>
          <DefaultContainer>
            <div className="mb-3">
              <p className="mb-1">
                This application is a sample with &quot;Applicational Atomic
                Design&quot; applied.
              </p>
              <p className="mb-1">
                For more information, please visit the{' '}
                <Anchor
                  href="https://github.com/AKIRA-MIYAKE/applicational-atomic-design-for-nextjs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github repository
                </Anchor>
                .
              </p>
              <p className="mb-1">
                This application is hard-coded with the users and the initial
                data and works only on the client side.
              </p>
              <p className="mb-1">
                Below are the user accounts who can sign in.
              </p>
            </div>

            <table>
              <thead>
                <tr className="text-left border-b-2">
                  <th className="p-2">Nickname</th>
                  <th className="p-2">Password</th>
                  <th className="p-2">Role</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="px-2 py-1">alice</td>
                  <td className="px-2 py-1">BlueRose</td>
                  <td className="px-2 py-1">Admin</td>
                </tr>
                <tr className="border-b">
                  <td className="px-2 py-1">bob</td>
                  <td className="px-2 py-1">Passw0rd!</td>
                  <td className="px-2 py-1">General</td>
                </tr>
                <tr>
                  <td className="px-2 py-1">carol</td>
                  <td className="px-2 py-1">Passw0rd!</td>
                  <td className="px-2 py-1">General</td>
                </tr>
              </tbody>
            </table>
          </DefaultContainer>
        </ContentMain>
      </main>
    </DefaultLayout>
  )
}

export default AboutTemplate
