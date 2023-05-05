import type { FC } from 'react'
import React from 'react'

import { MUSIC_GENRES } from '@/app/utils/constants'
import Label from '@/components/Label/Label'

const GenresOption: FC = () => {
  return (
    <div className="flex gap-2">
      {MUSIC_GENRES.map(({ title, value }) => (
        <Label key={value} value={value}>
          {title}
        </Label>
      ))}
    </div>
  )
}

export default GenresOption
