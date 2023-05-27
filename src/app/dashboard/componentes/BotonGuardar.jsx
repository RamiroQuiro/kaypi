import React from 'react'

export default function BotonGuardar({children,onClick}) {
  return (
    <button 
    className="text-sm font-medium tracking-wide pt-2 text-gray-700 hover:text-primary-200 duration-200" onClick={onClick}>{children}</button>
  )
}
