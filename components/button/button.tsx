import React from 'react'
import '@/components/button/button.css'
import type { FC, ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  type: 'filled' | 'outline' | 'icon'
  color: 'green' | 'white' | 'gray'
  size?: 'small' | 'large'
}

const setButtonClassname = (...className) => {
  return ['button', className.join(' ')].join(' ')
}

const Button: FC<ButtonProps> = ({ children, type, size, color }) => {
  return (
    <button type="button" className={setButtonClassname(type, size, color)}>
      {children}
    </button>
  )
}

export default Button
