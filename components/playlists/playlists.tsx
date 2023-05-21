import type { StaticImageData } from 'next/image'
import Link from 'next/link'
import React from 'react'
import type { FC } from 'react'

import PlaylistCard from '@/components/playlist-card/playlist-card'

interface PlaylistsDataType {
  name: string
  type: string
  artistInclude: string[]
  description: string
  cover: StaticImageData
}

interface RecommendedPlaylistsDataType {
  name: string
  link: string
  playlists: PlaylistsDataType[]
}

interface RecommendedPlaylistsProps {
  playlistsData: RecommendedPlaylistsDataType
}

const Playlists: FC<RecommendedPlaylistsProps> = ({ playlistsData }) => {
  const { name, link, playlists } = playlistsData
  return (
    <div className="flex flex-col mt-8 mb-4">
      <div className="flex justify-between items-center">
        <h3 className="h3">{name}</h3>
        <Link href={link} className="text-white">
          Lihat Semua
        </Link>
      </div>
      <div className="grid grid-rows-1 grid-flow-col gap-x-6 gap-y-4 mt-6">
        {playlists.map(
          ({ name, type, artistInclude, description, cover }, index) => (
            <PlaylistCard
              name={name}
              type={type}
              cover={cover}
              artistInclude={artistInclude}
              description={description}
              key={index}
            />
          )
        )}
      </div>
    </div>
  )
}

export default Playlists
