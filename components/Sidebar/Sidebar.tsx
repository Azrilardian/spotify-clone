import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import type { FC } from 'react'

import SpotifyLogo from '@/assets/images/spotify-logo.png'
import MenuItems from '@/components/menu-items/menu-items'
import PlaylistItems from '@/components/playlist-items/playlist-items'

const Sidebar: FC = () => {
  return (
    <aside className="flex flex-col w-1/6 pl-4 pt-6 h-screen bg-main-black fixed top-0 left-0 z-10">
      <div className="sidebar__logo">
        <Link href="/">
          <Image src={SpotifyLogo} alt="Spotify Logo" height={40} />
        </Link>
      </div>
      <MenuItems />
      <div className="pr-4">
        <hr className="opacity-40 mt-4" />
      </div>
      <PlaylistItems />
    </aside>
  )
}

export default Sidebar
