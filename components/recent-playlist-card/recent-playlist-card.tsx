'use client'

import { Icon } from '@iconify/react'
import Image from 'next/image'
import type { StaticImageData } from 'next/image'
import React from 'react'
import type { FC } from 'react'

interface RecentPlaylistCardProps {
  name: string
  cover: StaticImageData
}

const RecentPlaylistCard: FC<RecentPlaylistCardProps> = ({ name, cover }) => {
  return (
    <div className="group/item flex items-center bg-main-dark-gray hover:bg-main-gray rounded-md overflow-hidden duration-300 transition-[background-color] cursor-pointer">
      <div className="recent-playlist-card">
        <Image src={cover} height={100} alt="Recent playlist cover example" />
      </div>
      <div className="flex px-4 justify-between items-center w-full">
        <p className="font-bold text-white">{name}</p>
        <Icon
          icon="ic:baseline-play-circle"
          className="text-main-green opacity-0 group-hover/item:opacity-100 duration-300 transition-[opacity] hover:scale-105"
          height={50}
        />
      </div>
    </div>
  )
}

export default RecentPlaylistCard
