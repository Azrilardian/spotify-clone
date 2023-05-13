import React from 'react'

import { menuItems, menuItemsTwo } from '@/app/utils/data-dummy'
import MenuItem from '@/components/menu-item/menu-item'

const MenuItems = () => {
  return (
    <>
      <ul className="flex flex-col mt-10 space-y-4">
        {menuItems.map(({ item, icons }, index) => (
          <MenuItem key={index} icons={icons}>
            {item}
          </MenuItem>
        ))}
      </ul>
      <ul className="flex flex-col mt-10 mb-4 space-y-4">
        {menuItemsTwo.map(({ item, icons }, index) => (
          <MenuItem key={index} icons={icons}>
            {item}
          </MenuItem>
        ))}
      </ul>
      <hr className="opacity-40" />
    </>
  )
}

export default MenuItems
