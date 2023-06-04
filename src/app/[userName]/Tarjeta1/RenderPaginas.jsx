import React, { useEffect, useState } from 'react'
import ContenedoresOpcionesHero from './ContenedoresOpcionesHero';
import ContenedorOpcionesBackground from './ContenedorOpcionesBackground';
import ContenedorOpcionesFont from './ContenedorOpcionesFont';
import HomeTarjeta from './component/HomeTarjeta';

export default function RenderPaginas({name,heroTarget}) {

const [nombreElemento, setNombreElemento] = useState("superior")

useEffect(() => {
    if (!name) {
        setNombreElemento("superior")
    }else{

        setNombreElemento(name)
    }


}, [name])


if (nombreElemento=="superior") return  <HomeTarjeta heroTarget={heroTarget}/>
if (nombreElemento=="fondo") return  <ContenedorOpcionesBackground/>
if (nombreElemento=="letras") return   <ContenedorOpcionesFont/>
//  return  <ContenedoresOpcionesHero heroTarget={heroTarget}/>

}