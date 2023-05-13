import Image from 'next/image'
import React from 'react'

import SpotifyLogo from '@/app/assets/images/spotify-logo.png'
import MenuItems from '@/components/menu-items/menu-items'

const Sidebar = () => {
  return (
    <aside className="flex flex-col basis-2/12 px-4 py-6 h-screen bg-mainBlack">
      <div className="sidebar__logo">
        <Image src={SpotifyLogo} alt="Spotify Logo" height={40} />
      </div>
      <MenuItems />
    </aside>
  )
}

export default Sidebar
