'use client'

import { Icon } from '@iconify/react'
import Image from 'next/image'
import type { StaticImageData } from 'next/image'
import React from 'react'
import type { FC } from 'react'

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
          {type === 'Mix' ? (
            <div>
              <Image
                src={cover}
                alt="Recommended playlist cover example"
                className="rounded-md"
              />
              <Icon
                icon="ic:baseline-play-circle"
                className="text-main-green opacity-0 group-hover/item:opacity-100 translate-y-5 group-hover/item:translate-y-0 duration-300 transition-[opacity, translate] hover:scale-105 absolute bottom-3 right-3"
                height={50}
              />
            </div>
          ) : (
            <div className="p-2">
              <Image
                src={cover}
                alt="Recommended playlist cover example"
                className="rounded-full"
              />
              <Icon
                icon="ic:baseline-play-circle"
                className="text-main-green opacity-0 group-hover/item:opacity-100 translate-y-5 group-hover/item:translate-y-0 duration-300 transition-[opacity, translate] hover:scale-105 absolute bottom-3 right-3"
                height={50}
              />
            </div>
          )}
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
