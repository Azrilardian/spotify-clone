import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import type { FC } from 'react'

import SpotifyLogo from '@/app/assets/images/spotify-logo.png'
import MenuItems from '@/components/menu-items/menu-items'
import PlaylistItems from '@/components/playlist-items/playlist-items'

const Sidebar: FC = () => {
  return (
    <aside className="flex flex-col basis-2/12 pl-4 pt-6 h-screen bg-main-black">
      <div className="sidebar__logo">
        <Link href="/">
          <Image src={SpotifyLogo} alt="Spotify Logo" height={40} />
        </Link>
      </div>
      <MenuItems />
      <hr className="opacity-40 mt-4" />
      <PlaylistItems />
    </aside>
  )
}

export default Sidebar
