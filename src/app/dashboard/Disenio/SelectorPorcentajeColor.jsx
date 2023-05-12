import React from 'react'

export default function SelectorPorcentajesColor({porcentajeMarcador,name}) {
    console.log(porcentajeMarcador)
  return (
    <span
     
    className="mt-0 w mx-auto text-center absolute p-1 -top-7  h-5 bg-gray-600/80 backdrop-blur-sm rounded text-xs font-bold text-gray-100 z-[80] ">{porcentajeMarcador}%</span>
  )
}
