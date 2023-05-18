import React from 'react'

export default function BackgroundDorm({children}) {
  return (
    <div className="relative flex flex-col min-w-0 break-words w-full pb-5 md:mt-0 shadow-lg rounded-lg bg-gradient-to-br from-white to-gray-50  border-0">{children}</div>
  )
}
