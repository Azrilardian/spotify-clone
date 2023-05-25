import localFont from 'next/font/local'

import Header from '@/components/header/header'
import Sidebar from '@/components/sidebar/sidebar'
import './globals.css'

export const metadata = {
  title: 'Spotify Clone',
  description: 'Spotify clone app build from Next JS',
}

const gothamFont = localFont({
  src: [
    {
      path: '../assets/fonts/Gotham-Book.woff2',
      weight: '400',
    },
    {
      path: '../assets/fonts/Gotham-Bold.woff2',
      weight: '800',
    },
  ],
  display: 'swap',
  variable: '--font-gotham',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${gothamFont.variable} font-gotham font-bold flex`}>
        <Sidebar />
        <div>
          <Header />
          <main>{children}</main>
        </div>
      </body>
    </html>
  )
}
