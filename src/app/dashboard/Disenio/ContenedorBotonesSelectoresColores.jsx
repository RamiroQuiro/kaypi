import React from 'react'
import BotonesSeleccionadoresColores from './BotonesSeleccionadoresColores'
import useDragger from '@/hook/useDragger'
import { useStoraStyle } from '@/context/DiseñoUser/contextStyles'

export default function ContenedorBotonesSelectoresColores({porcentajeColor,name,width}) {
   const coordenadas= useDragger(name)
   const guardarPorcentajes=useStoraStyle((state)=>state.guardarPorcentajes)
   
  return (
    <div
    onChange={()=>guardarPorcentajes(coordenadas/width*100)}
    id={name}
    style={{
      left:porcentajeColor+"%"
    }}
    className="flex flex-col items-center absolute  top-0 left-0 -ml-2">
    <BotonesSeleccionadoresColores name={name} />
    </div>
  )
}
