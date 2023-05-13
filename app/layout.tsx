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
        <main className="basis-10/12 h-screen bg-mainGreen">{children}</main>
      </body>
    </html>
  )
}
