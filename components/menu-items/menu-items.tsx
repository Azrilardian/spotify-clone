import React from 'react'
import type { FC } from 'react'

import MenuItem from '@/components/menu-item/menu-item'
import { menuItems, menuItemsTwo } from '@/utils/data-dummy'

const MenuItems: FC = () => {
  return (
    <>
      <ul className="flex flex-col mt-10 space-y-4 font-semibold">
        {menuItems.map(({ name, icons, link }, index) => (
          <MenuItem key={index} icons={icons} link={link}>
            {name}
          </MenuItem>
        ))}
      </ul>
      <ul className="flex flex-col mt-10 space-y-4">
        {menuItemsTwo.map(({ name, icons, link }, index) => (
          <MenuItem key={index} icons={icons} link={link}>
            {name}
          </MenuItem>
        ))}
      </ul>
    </>
  )
}

export default MenuItems
