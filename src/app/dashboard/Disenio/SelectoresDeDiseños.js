import React, { useEffect, useState } from 'react'
import ContenedoresOpcionesHero from './ContenedoresOpcionesHero';

export default function SelectoresDeDiseños({name,heroTarget}) {

const [nombreElemento, setNombreElemento] = useState("superior")

useEffect(() => {
    if (!name) {
        setNombreElemento("superior")
    }else{

        setNombreElemento(name)
    }


}, [name])


if (nombreElemento=="superior") return  <ContenedoresOpcionesHero heroTarget={heroTarget}/>
if (nombreElemento=="fondo") return  <div>fondo</div>
if (nombreElemento=="letras") return   <div>letras</div>
//  return  <ContenedoresOpcionesHero heroTarget={heroTarget}/>

}