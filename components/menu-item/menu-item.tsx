'use client'

import { Icon } from '@iconify/react'
import React from 'react'

const MenuItem = ({ children, icons }) => {
  return (
    <div className="flex items-center space-x-3 text-white text-opacity-50 hover:text-opacity-100 ease-in duration-150 cursor-pointer">
      {icons && <Icon icon={icons} width={26} />}
      <h2>{children}</h2>
    </div>
  )
}

export default MenuItem
