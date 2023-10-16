import './globals.css'
import './styles/animations.css'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'UberEats Web',
  description: 'Food delivery app built with Next.js and Tailwind CSS.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body>
        <Navbar />
        <div className={inter.className}>{children}</div>
      </body>
    </html>
  )
}
