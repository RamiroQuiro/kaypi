import React from 'react'
import BotonesSeleccionadoresColores from './BotonesSeleccionadoresColores'
import useDragger from '@/hook/useDragger'

export default function ContenedorBotonesSelectoresColores({porcentajeColor,name,width}) {
   const coordenadas= useDragger(name)
  

  return (
    <div
    id={name}
    style={{
      left:porcentajeColor+"%"
    }}
    className="flex flex-col items-center absolute bg-transparent top-0 left-0 -ml-2">
    <BotonesSeleccionadoresColores name={name} porcentaje={coordenadas/width} />
    </div>
  )
}
