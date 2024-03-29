import { Inter } from 'next/font/google'
import './globals.css'
import DataProvider from '@/contexts/DataProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Star Wars',
  description: 'star wars dashboard',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <DataProvider>{children}</DataProvider>
      </body>
    </html>
  )
}
