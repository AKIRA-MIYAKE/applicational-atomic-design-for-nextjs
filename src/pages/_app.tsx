import { VFC } from 'react'
import { AppProps } from 'next/app'

import { AuthContextProvider } from '../contexts/AuthContext'

import 'tailwindcss/tailwind.css'
import '../styles/globals.css'

const MyApp: VFC<AppProps> = ({ Component, pageProps }) => {
  return (
    <AuthContextProvider>
      <Component {...pageProps} />
    </AuthContextProvider>
  )
}

export default MyApp
