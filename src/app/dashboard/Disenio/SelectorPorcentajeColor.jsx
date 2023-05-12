import React from 'react'

export default function SelectorPorcentajesColor({porcentajeMarcador,name}) {
  return (
    <span
     
    className="mt-0 w mx-auto text-center absolute p-1 -top-6  h-5 bg-gray-100/80 border backdrop-blur-sm rounded text-xs font-bold text-gray-700 z-[80] ">{porcentajeMarcador}%</span>
  )
}
