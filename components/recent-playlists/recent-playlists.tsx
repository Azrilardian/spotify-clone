import React from 'react'

import RecentPlaylistCard from '@/components/recent-playlist-card/recent-playlist-card'
import { recentPlaylists } from '@/utils/data-dummy'

const RecentPlaylists = () => {
  return (
    <div className="grid grid-rows-2 grid-flow-col gap-x-6 gap-y-4 mt-6">
      {recentPlaylists.map(({ name, cover }, index) => (
        <RecentPlaylistCard name={name} cover={cover} key={index} />
      ))}
    </div>
  )
}

export default RecentPlaylists
