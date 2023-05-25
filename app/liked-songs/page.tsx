import React from 'react'

import PlaylistBanner from '@/components/playlist-banner/playlist-banner'
import { likedSongsPlaylists, profile } from '@/utils/data-dummy'

const LikedSongsPage = () => {
  const { name, avatarSource } = profile
  const { name: playlistsName, cover, totalSongs } = likedSongsPlaylists

  return (
    <div className="page-container page-container--banner">
      <PlaylistBanner
        profileName={name}
        playlistName={playlistsName}
        playlistCoverSource={cover}
        profileAvatarSource={avatarSource}
        songsTotal={totalSongs}
      />
    </div>
  )
}

export default LikedSongsPage
