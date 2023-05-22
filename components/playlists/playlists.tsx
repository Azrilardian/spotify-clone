import type { StaticImageData } from 'next/image'
import Link from 'next/link'
import React from 'react'
import type { FC } from 'react'

import FilterOption from '@/components/filter-option/filter-option'
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
  filterOption?: boolean
  showAll?: boolean
}

// TODO: change grid to 6
const Playlists: FC<RecommendedPlaylistsProps> = ({
  playlistsData,
  filterOption,
  showAll,
}) => {
  const { name, link, playlists } = playlistsData

  return (
    <div className="flex flex-col mb-8">
      <div className="flex justify-between items-center">
        <h3 className="h3">{name}</h3>
        {filterOption ? (
          <FilterOption />
        ) : (
          <Link href={link} className="text-white">
            Lihat Semua
          </Link>
        )}
      </div>
      <div className="grid grid-cols-6 grid-flow-row gap-x-6 gap-y-6 mt-6">
        {showAll
          ? playlists.map(
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
            )
          : playlists
              .slice(0, 6)
              .map(
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
