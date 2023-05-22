import { Icon } from '@iconify/react'
import type { StaticImageData } from 'next/image'
import Image from 'next/image'
import React from 'react'
import type { FC } from 'react'

interface PlaylistImageProps {
  source: StaticImageData
  alt: string
  type: string
}

const PlaylistImage: FC<PlaylistImageProps> = ({ source, alt, type }) => {
  return (
    <div className={type === 'Mix' ? 'p-0' : 'p-2'}>
      <Image
        src={source}
        alt={alt}
        className={type === 'Mix' ? 'rounded-md' : 'rounded-full'}
      />
      <Icon
        icon="ic:baseline-play-circle"
        className="text-main-green opacity-0 group-hover/item:opacity-100 translate-y-5 group-hover/item:translate-y-0 duration-300 transition-[opacity, translate] hover:scale-105 absolute bottom-3 right-3"
        height={50}
      />
    </div>
  )
}

export default PlaylistImage
