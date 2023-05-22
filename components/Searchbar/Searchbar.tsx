import { Icon } from '@iconify/react'
import React from 'react'
import type { FC } from 'react'

const Searchbar: FC = () => {
  return (
    <div className="bg-white px-3 flex items-center justify-between w-full text-black rounded-full">
      <Icon icon="ic:baseline-search" fontSize={28} />
      <input
        placeholder="Apa yang ingin kamu dengarkan?"
        className="bg-white px-2 py-3 border-none outline-none text-sm rounded-full min-w-[300px] text-main-darkest-gray"
      />
    </div>
  )
}

export default Searchbar
