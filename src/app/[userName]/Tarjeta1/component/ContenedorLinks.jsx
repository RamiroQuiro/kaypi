
"use client"
import { useStoraStyle } from '@/context/DiseñoUser/contextStyles'
import BotonesLink from './BotonesLink'
import { useContextVisitas } from '@/context/contextoVisita/contextoVistas'
import { useContextDatosUser } from '@/context/datosUser/contextoDatosUser'
import { usePathname } from 'next/navigation'
import { shallow } from 'zustand/shallow'

export default function ContenedorLinks({}) {

  const pathURL=usePathname()
  let regex = /dashboard/;

  
  const {userData}=useContextVisitas(state=>({
    userData:state.userData
  }),shallow)
  
 const userDatosUser=useContextDatosUser((state)=>(state.userData.enlaces))
  

  const userDatas = useStoraStyle(
    (state) => (state.styles),
    shallow
  );
  const styles=regex.test(pathURL) ? userDatas : userData?.style


  
  
  const links=regex.test(pathURL) ?userDatosUser :userData?.enlaces

  return (
    <ul className=" flex gap-2 flex-grow  flex-wrap lowercase tex rounded p-2 w-11/12  md:6/12  md:text md:font-semibold mx-auto  items-center justify-between gap-y-4  font-thin  text-left py-2">

    {
        links?.map((link)=>(
            <BotonesLink
            enlace={link.link}
            color={styles?.heroTarget.Color1}
            key={link.id}
            >{link.name}</BotonesLink>
        ))
    }
    </ul>
  )
}
