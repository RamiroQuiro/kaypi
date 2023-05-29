
"use client"
import BotonesLink from './BotonesLink'
import { useContextVisitas } from '@/context/contextoVisita/contextoVistas'
import { shallow } from 'zustand/shallow'

export default function ContenedorLinks({}) {


  
  const {userData}=useContextVisitas(state=>({
    userData:state.userData
  }),shallow)
 
  const styles=userData?.style

  const links=userData?.enlaces

  return (
    <ul className=" flex  flex-wrap lowercase tex rounded p-2 w-11/12  md:6/12  md:text md:font-semibold mx-auto  items-center justify-between gap-y-4  font-thin  text-left py-2">

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
