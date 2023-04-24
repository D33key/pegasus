import { Inter } from 'next/font/google'
import Navigation from './Navigation/Navigation'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={`${inter.className} grid`}>
      <Navigation/>
      <div className='content'>Content</div>
    </div>
  )
}
