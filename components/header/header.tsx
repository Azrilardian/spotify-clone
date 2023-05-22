'use client'

import { Icon } from '@iconify/react'
import React, { useEffect, useState } from 'react'
import '@/components/header/header.css'
import type { FC } from 'react'

import AvatarProfile from '@/components/avatar-profile/avatar-profile'
import Button from '@/components/button/button'
import { profile } from '@/utils/data-dummy'

const Header: FC = () => {
  const { avatarSource, name, description } = profile
  const [isScroll, setIsScroll] = useState(false)

  const handleScroll = () => {
    window.scrollY === 0 ? setIsScroll(false) : setIsScroll(true)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  })

  return (
    <header className={isScroll ? 'header is-scroll' : 'header'}>
      <div className="flex gap-2 items-center justify-center">
        <Button type="icon" size="small" color="gray">
          <Icon icon="octicon:chevron-left-24" fontSize={26} />
        </Button>
        <Button type="icon" size="small" color="gray">
          <Icon icon="octicon:chevron-right-24" fontSize={26} />
        </Button>
      </div>
      <div className="flex gap-2 items-center justify-center">
        <Button type="filled" size="small" color="white">
          Upgrade
        </Button>
        <Button type="icon" size="small" color="gray">
          <AvatarProfile source={avatarSource} alt={description} />
        </Button>
      </div>
    </header>
  )
}

export default Header
