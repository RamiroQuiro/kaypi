"use client"
import React, { useEffect, useState } from 'react'
import HomeTarjeta from './component/HomeTarjeta';
import MiEmpresa from './Outlet/MiEmpresa';
import Ubicacion from './Outlet/Ubicacion';
import Multimedia from './Outlet/Multimedia';
import LoaderCss from '@/components/LoaderCss';
import { usePathname } from 'next/navigation';
import { useContextDatosUser } from '@/context/datosUser/contextoDatosUser';
import { useStoraStyle } from '@/context/DiseñoUser/contextStyles';
import { useContextVisitas } from '@/context/contextoVisita/contextoVistas';
import { shallow } from 'zustand/shallow';

export default function RenderPaginas({name}) {

const [nombreElemento, setNombreElemento] = useState("")

useEffect(() => {
    if (!name) {
        setNombreElemento("")
    }else{

        setNombreElemento(name)
    }


}, [name])

const [loading, setLoading] = useState(false);
const pathURL = usePathname();
const [estilos, setEstilos] = useState(null);
const [userDatos, setUserDatos] = useState(null);
let regex = /dashboard/;
const { userData } = useContextVisitas(
  (state) => ({
    userData: state.userData,
  }),
  shallow
);
const userDatas = useStoraStyle((state) => state.styles, shallow);


const userDatosUser = useContextDatosUser((state) => state.userData.datos);

useEffect(() => {
  const userDatosRegex = regex.test(pathURL)
    ? userDatosUser
    : userData?.datos;
  const styles = regex.test(pathURL) ? userDatas : userData?.style;

  const cargandoData = () => {
    setEstilos(styles);
    setUserDatos(userDatosRegex);
    setLoading(true);
  };
  cargandoData();
}, [userData, userDatas, loading,estilos]);


if (!loading) return <LoaderCss/>
if(estilos && loading)


if (nombreElemento=="") return  <HomeTarjeta  estilos={estilos} userDatos={userDatos}  />
if (nombreElemento=="servicio") return  <MiEmpresa/>
if (nombreElemento=="ubicacion") return   <Ubicacion/>
if (nombreElemento=="multimedia") return   <Multimedia/>
//  return  <ContenedoresOpcionesHero heroTarget={heroTarget}/>

}