import Link from 'next/link'
import React from 'react'

import PlaylistCard from '@/components/playlist-card/playlist-card'

const Playlists = ({ playlistsData }) => {
  const { name, link, playlists } = playlistsData
  return (
    <div className="flex flex-col mt-8">
      <div className="flex justify-between items-center">
        <h3 className="h3">{name}</h3>
        <Link href={link} className="text-white">
          Lihat Semua
        </Link>
      </div>
      <div className="grid grid-rows-1 grid-flow-col gap-x-6 gap-y-4 mt-6">
        {playlists.map(({ name, cover, artistInclude }, index) => (
          <PlaylistCard
            name={name}
            cover={cover}
            artistInclude={artistInclude}
            key={index}
          />
        ))}
      </div>
    </div>
  )
}

export default Playlists
