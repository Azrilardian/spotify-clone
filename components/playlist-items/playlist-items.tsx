import React, { memo } from 'react'
import type { FC } from 'react'

import MenuItem from '@/components/menu-item/menu-item'
import { playlists } from '@/utils/data-dummy'

const PlaylistItems: FC = () => {
  return (
    <div className="h-max overflow-x-hidden overflow-y-hidden hover:overflow-y-scroll">
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

export default memo(PlaylistItems)
