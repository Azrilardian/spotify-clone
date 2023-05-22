import Header from '@/components/header/header'
import Sidebar from '@/components/sidebar/sidebar'
import './globals.css'

export const metadata = {
  title: 'Spotify Clone',
  description: 'Spotify clone app build from Next JS',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="flex">
        <Sidebar />
        <div>
          <Header />
          <main className="h-max px-10 pt-10 pb-10 absolute top-20 right-0 w-5/6">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
