import Image from 'next/image'
import type { StaticImageData } from 'next/image'
import React from 'react'
import type { FC } from 'react'

interface AvatarProfileProps {
  source: StaticImageData
  alt: string
}

const AvatarProfile: FC<AvatarProfileProps> = ({ source, alt }) => {
  return (
    <div className="relative">
      <Image src={source} alt={alt} height={26} className="rounded-full" />
    </div>
  )
}

export default AvatarProfile
