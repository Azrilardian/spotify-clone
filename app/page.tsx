import React from 'react'

import Playlists from '@/components/playlists/playlists'
import RecentPlaylists from '@/components/recent-playlists/recent-playlists'
import { recommendedPlaylists } from '@/utils/data-dummy'

const Dashboard = () => {
  return (
    <>
      <h2 className="h2">Selamat Pagi</h2>
      <RecentPlaylists />
      <Playlists playlistsData={recommendedPlaylists} />
    </>
  )
}

export default Dashboard
