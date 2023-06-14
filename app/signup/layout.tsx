import '../globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Truffles | Signup',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (<div className='bg-[#F4F4F4]'>
    {children}
    </div>
  )
}
