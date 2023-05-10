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
      <body>
        <main>{children}</main>
      </body>
    </html>
  )
}
