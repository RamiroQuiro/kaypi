import React from 'react'

export default function CabeceraContenedor({children}) {
  return (
    <div className="rounded-t bg-gray-200 text-gray-700 border-b-2 border-primary-100 mb-0 px-6 py-1.5 text-lg font-semibold">{children}</div>
  )
}
