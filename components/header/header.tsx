'use client'

import { Icon } from '@iconify/react'
import React, { useEffect, useState } from 'react'
import '@/components/header/header.css'

import Button from '@/components/button/button'

const Header = () => {
  const [isScroll, setIsScroll] = useState(false)
  const [clientWindowHeight, setClientWindowHeight] = useState('')

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
      <Button type="filled" size="small" color="white">
        Upgrade
      </Button>
    </header>
  )
}

export default Header
