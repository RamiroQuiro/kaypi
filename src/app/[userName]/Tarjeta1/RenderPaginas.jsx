"use client"
import React, { useEffect, useState } from 'react'
import HomeTarjeta from './component/HomeTarjeta';
import Ubicacion from './Outlet/Ubicacion';
import Multimedia from './Outlet/Multimedia';
import LoaderCss from '@/components/LoaderCss';
import { usePathname } from 'next/navigation';
import { useContextDatosUser } from '@/context/datosUser/contextoDatosUser';
import { useStoraStyle } from '@/context/DiseñoUser/contextStyles';
import { useContextVisitas } from '@/context/contextoVisita/contextoVistas';
import { shallow } from 'zustand/shallow';
import MiEmpresa from './Outlet/MiEmpresa';

export default function RenderPaginas({name}) {

const [nombreElemento, setNombreElemento] = useState("")
const [imgPerfil, setImgPerfil] = useState(null)

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


const userDatosUser = useContextDatosUser((state) => state.userData);
useEffect(() => {
    const userDatosRegex = regex.test(pathURL)
    ? userDatosUser
    : userData;
    const styles = regex.test(pathURL) ? userDatas : userData?.style;

  const cargandoData = () => {
    setEstilos(styles);
    setUserDatos(userDatosRegex);
    setLoading(true);
  };
  cargandoData();

  const imgBuscado = userDatos?.images?.find(
    (elemet) => elemet.nombre == "perfil"
  );
  !imgBuscado ? null : setImgPerfil(imgBuscado);
  
}, [userData, userDatas,userDatosUser, loading,estilos,imgPerfil]);



if (!loading) return <LoaderCss/>

if(estilos && loading){
if (nombreElemento=="") return  <HomeTarjeta  estilos={estilos} imgPerfil={imgPerfil} userDatos={userDatos?.datos}  />
if (nombreElemento=="servicios") return  <MiEmpresa userDatos={userDatos} />
if (nombreElemento=="ubicacion") return   <Ubicacion userDatos={userDatos?.secciones?.ubicacion}/>
if (nombreElemento=="multimedia") return   <Multimedia/>}
//  return  <ContenedoresOpcionesHero heroTarget={heroTarget}/>

}