import BackgroundDorm from '@/components/BackgroundDorm'
import CabeceraContenedor from '@/components/CabeceraContenedor'
import React from 'react'
import ContenedorInputEnlaces from './ContenedorInputEnlaces'

export default function ContenedorFormularioEnlaces() {
  return (
    <BackgroundDorm>
    <CabeceraContenedor>
      <h2 className="text-blueGray-700 md:text-xl ">
        Ingresa tus datos de contacto
      </h2>
    </CabeceraContenedor>
    <div className="flex-auto md:px-4 lg:px-4  pt-10">
       <ContenedorInputEnlaces/>
    </div>
    <br/>
    <div className="flex-auto md:px-4 lg:px-4  pt-10">

    </div>
  </BackgroundDorm>
  )
}
