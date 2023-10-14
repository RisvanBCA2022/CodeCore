import Navbar from '@/components/Navbar/Navbar'
import './globals.css'
import { Home } from '@/components'
// import { Inter } from 'next/font/google'
// const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({children,}) {
  return (
    <html lang="en">
    <body>
      <div><Navbar /></div>
      <Home />
          
          <main className="my-0 py-16">{children}</main>
      
    </body>
  </html>
  )
}
