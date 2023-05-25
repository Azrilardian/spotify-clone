import React from 'react'

import Playlists from '@/components/playlists/playlists'
import { collectionPlaylists } from '@/utils/data-dummy'

const CollectionPage = () => {
  return (
    <div className="page-container">
      <Playlists playlistsData={collectionPlaylists} filterOption showAll />
    </div>
  )
}

export default CollectionPage
