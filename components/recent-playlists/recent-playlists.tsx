import React, { memo } from 'react'
import type { FC } from 'react'

import RecentPlaylistCard from '@/components/recent-playlist-card/recent-playlist-card'
import { recentPlaylists } from '@/utils/data-dummy'

const RecentPlaylists: FC = () => {
  return (
    <div className="grid grid-rows-2 grid-flow-col gap-x-6 gap-y-4 mb-8">
      {recentPlaylists.map(({ name, cover }, index) => (
        <RecentPlaylistCard name={name} cover={cover} key={index} />
      ))}
    </div>
  )
}

export default memo(RecentPlaylists)
