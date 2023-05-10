'use client'

import React, { useEffect } from 'react'

const Error = ({ error, reset }: any) => {
  useEffect(() => {
    console.log(error)
    console.log(reset)
  }, [error, reset])

  return <div>Error</div>
}

export default Error
