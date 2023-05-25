import React from 'react'

import Playlists from '@/components/playlists/playlists'
import RecentPlaylists from '@/components/recent-playlists/recent-playlists'
import { recommendedPlaylists, recentlyPlayPlaylists } from '@/utils/data-dummy'

const Dashboard = () => {
  return (
    <div className="page-container">
      <h2 className="h2 mb-4">Selamat Pagi</h2>
      <RecentPlaylists />
      <Playlists playlistsData={recommendedPlaylists} />
      <Playlists playlistsData={recentlyPlayPlaylists} />
    </div>
  )
}

export default Dashboard
