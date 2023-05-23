import React from 'react'
import BotonesLink from './BotonesLink'

export default function ContenedorLinks({links}) {
  return (
    <ul className=" flex  flex-wrap lowercase tex rounded p-2 w-11/12  md:6/12  md:text md:font-semibold mx-auto  items-center justify-between gap-y-4  font-thin  text-left py-2">

    {
        links?.map((link)=>(
            <BotonesLink
            key={link.id}
            >{link.name}</BotonesLink>
        ))
    }
    </ul>
  )
}
