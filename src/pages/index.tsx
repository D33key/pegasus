import { Inter } from 'next/font/google'
import Navigation from '../components/Navigation/Navigation'
import Welcome from './Welcome'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={`${inter.className} grid`}>
      <Navigation/>
      <Welcome />
    </div>
  )
}
