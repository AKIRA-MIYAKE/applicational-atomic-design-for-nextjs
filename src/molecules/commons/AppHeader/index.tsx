import { VFC } from 'react'
import Link from 'next/link'

const AppHeader: VFC = () => {
  return (
    <header className="w-full h-12 bg-indigo-500 fixed">
      <div className="container mx-auto px-4 h-full flex flex-row justify-between items-center">
        <div>
          <Link href="/">
            <a className="text-lg text-white hover:text-opacity-75">
              <div>Applicational Atomic Design</div>
            </a>
          </Link>
        </div>
      </div>
    </header>
  )
}

export default AppHeader
