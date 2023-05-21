import React from 'react'

import Playlists from '@/components/playlists/playlists'
import RecentPlaylists from '@/components/recent-playlists/recent-playlists'
import { recommendedPlaylists, recentlyPlayPlaylists } from '@/utils/data-dummy'

const Dashboard = () => {
  return (
    <>
      <h2 className="h2">Selamat Pagi</h2>
      <RecentPlaylists />
      <Playlists playlistsData={recommendedPlaylists} />
      <Playlists playlistsData={recentlyPlayPlaylists} />
    </>
  )
}

export default Dashboard
