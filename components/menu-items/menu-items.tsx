'use client'

import { usePathname } from 'next/navigation'
import React, { memo } from 'react'
import type { FC } from 'react'

import MenuItem from '@/components/menu-item/menu-item'
import { menuItems, menuItemsTwo } from '@/utils/data-dummy'

const MenuItems: FC = () => {
  const pathname = usePathname()

  return (
    <>
      <ul className="flex flex-col mt-10 space-y-4 font-bold">
        {menuItems.map(({ name, icons, link }, index) => (
          <MenuItem
            key={index}
            icons={icons}
            link={link}
            active={pathname == link ? true : false}
          >
            {name}
          </MenuItem>
        ))}
      </ul>
      <ul className="flex flex-col mt-10 space-y-4 font-bold">
        {menuItemsTwo.map(({ name, icons, link }, index) => (
          <MenuItem
            key={index}
            icons={icons}
            link={link}
            active={pathname == link ? true : false}
          >
            {name}
          </MenuItem>
        ))}
      </ul>
    </>
  )
}

export default memo(MenuItems)
