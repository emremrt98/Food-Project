import React from 'react'

export default function Container({children}) {
  return (
    <div className='container mx-auto h-full'>
        {children}
    </div>
  )
}
