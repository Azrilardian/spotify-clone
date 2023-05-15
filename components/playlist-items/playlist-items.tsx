import React from 'react'
import type { FC } from 'react'

import { playlists } from '@/app/utils/data-dummy'
import MenuItem from '@/components/menu-item/menu-item'

const PlaylistItems: FC = () => {
  return (
    <div className="h-max overflow-x-hidden overflow-y-scroll">
      <ul className="flex flex-col mt-5 mb-4 space-y-4">
        {playlists.map(({ name, link }, index) => (
          <MenuItem key={index} link={link}>
            {name}
          </MenuItem>
        ))}
      </ul>
    </div>
  )
}

export default PlaylistItems
