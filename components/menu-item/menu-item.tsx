'use client'

import { Icon } from '@iconify/react'
import Link from 'next/link'
import React from 'react'
import type { FC, ReactNode } from 'react'

interface MenuItemsProps {
  children: ReactNode
  icons?: string
  link: string
  active?: boolean
}

const MenuItem: FC<MenuItemsProps> = ({ children, icons, link, active }) => {
  return (
    <div
      className={
        active
          ? 'flex items-center space-x-3 text-white ease-in duration-150 cursor-pointer font-semibold'
          : 'flex items-center space-x-3 text-white text-opacity-50 hover:text-opacity-100 ease-in duration-150 cursor-pointer font-semibold'
      }
    >
      {icons && <Icon icon={icons} width={26} />}
      <h2>
        <Link href={link}>{children}</Link>
      </h2>
    </div>
  )
}

export default MenuItem
