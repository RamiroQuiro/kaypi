import React, { useEffect, useState } from 'react'
import HomeTarjeta from './component/HomeTarjeta';
import MiEmpresa from './Outlet/MiEmpresa';
import Ubicacion from './Outlet/Ubicacion';
import Multimedia from './Outlet/Multimedia';

export default function RenderPaginas({name}) {

const [nombreElemento, setNombreElemento] = useState("")

useEffect(() => {
    if (!name) {
        setNombreElemento("")
    }else{

        setNombreElemento(name)
    }


}, [name])


if (nombreElemento=="") return  <HomeTarjeta />
if (nombreElemento=="servicio") return  <MiEmpresa/>
if (nombreElemento=="ubicacion") return   <Ubicacion/>
if (nombreElemento=="multimedia") return   <Multimedia/>
//  return  <ContenedoresOpcionesHero heroTarget={heroTarget}/>

}