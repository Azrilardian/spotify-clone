'use client'

import type { StaticImageData } from 'next/image'
import React from 'react'
import type { FC } from 'react'

import PlaylistImage from '@/components/playlist-image/playlist-image'
import sliceWords from '@/utils/slice-words'

interface PlaylistCardProps {
  name: string
  type: string
  artistInclude: string[]
  description: string
  cover: StaticImageData
}

const PlaylistCard: FC<PlaylistCardProps> = ({
  name,
  type,
  artistInclude,
  description,
  cover,
}) => {
  return (
    <div className="group/item bg-main-dark-gray hover:bg-main-gray duration-300 transition-[background-color] rounded-md p-4 flex flex-col gap-5 cursor-pointer">
      <div>
        <div className="relative">
          <PlaylistImage source={cover} type={type} alt={description} />
        </div>
        <p className="font-semibold text-white my-3">{name}</p>
        {description ? (
          <p className="text-gray-400">{sliceWords(description, 100)}</p>
        ) : (
          <p className="text-gray-400">
            {artistInclude.map((artist) => artist).join(', ')} dan lainnya
          </p>
        )}
      </div>
    </div>
  )
}

export default PlaylistCard
