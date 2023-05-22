import React from 'react'

import Playlists from '@/components/playlists/playlists'
import { collectionPlaylists } from '@/utils/data-dummy'

const CollectionPage = () => {
  return (
    <>
      <Playlists playlistsData={collectionPlaylists} filterOption showAll />
    </>
  )
}

export default CollectionPage
