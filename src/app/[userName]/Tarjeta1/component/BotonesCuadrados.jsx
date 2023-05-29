"use client"
import { useStoraStyle } from '@/context/DiseñoUser/contextStyles'
import Link from 'next/link'
import React from 'react'

export default function BotonesCuadrados({
    path
}) {


    const {styles}=useStoraStyle((state)=>({styles:state.styles}))
  return (
    <Link 
    style={{
fill:styles?.heroTarget.Color1
    }}
    href={"#"}
    className="w-10 h-10 rounded-lg bg-gray-100 p-2 shadow-md delay-200 animate-[aparecer_3s]">
    <svg
     style={{
        fill:styles?.heroTarget.Color1
     }}
     className="w-full h-full fill-primary-100 "
     width="36"
     height="36px"
     viewBox="0 0 24 24"
     fill="none"
     xmlns="http://www.w3.org/2000/svg"
   > 
     {path}</svg>
  </Link>
  )
}
