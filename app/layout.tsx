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
        <main className="h-screen px-10 pt-14 pb-10 absolute top-0 right-0 w-5/6">
          {children}
        </main>
      </body>
    </html>
  )
}
