import Image from 'next/image'
import type { StaticImageData } from 'next/image'
import React from 'react'
import type { FC } from 'react'

import AvatarProfile from '@/components/avatar-profile/avatar-profile'

interface PlaylistBannerProps {
  playlistName: string
  playlistCoverSource: StaticImageData
  profileName: string
  profileAvatarSource: StaticImageData
  songsTotal: number
}

const PlaylistBanner: FC<PlaylistBannerProps> = ({
  playlistName,
  playlistCoverSource,
  profileName,
  profileAvatarSource,
  songsTotal,
}) => {
  return (
    <div className="from-[#7142f2] to-[#3f19a7] bg-gradient-to-b px-10 pt-24 pb-10 absolute top-0 left-0 w-full">
      <div className="flex gap-5 items-end">
        <div>
          <Image src={playlistCoverSource} alt="Playlists Cover" height={220} />
        </div>
        <div>
          <p className="p">Playlist</p>
          <h1 className="h1">{playlistName}</h1>
          <div className="flex items-center gap-2 mt-4">
            <AvatarProfile source={profileAvatarSource} alt="Profile Cover" />
            <p className="p font-bold">{profileName}</p> -
            <p className="p">{songsTotal} lagu</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlaylistBanner
