import React from 'react'
import type { ReactNode, FC, SyntheticEvent } from 'react'

interface LabelProps {
  children: ReactNode
  value: string
}

const Label: FC<LabelProps> = ({ children, value }) => {
  const handleClick = (event: SyntheticEvent) => {
    event.preventDefault()

    console.log(value)
  }

  return (
    <div
      className="flex justify-center items-center rounded-full bg-gray-700 text-white px-5 py-1 hover:bg-gray-800 cursor-pointer"
      onClick={handleClick}
    >
      {children}
    </div>
  )
}

export default Label
