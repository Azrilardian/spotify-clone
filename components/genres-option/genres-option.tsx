import type { FC } from 'react'
import React from 'react'

import Label from '@/components/label/label'
import { MUSIC_GENRES } from '@/utils/constants'

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
