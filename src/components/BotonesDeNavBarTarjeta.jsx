"use client"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function BotonesDeNavBarTarjeta({onClick,icon,link,name}) {
  

  return (
    <button 
    id={name}
    name={link}
    onClick={onClick}
    className="hover:text-primary-100 relative hover:-translate-y-1 z-20 -translate-y-2 flex flex-col items-center justify-center cursor-pointer duration-200 group"
    >
      <span className='text-xs font-medium text-center mx-auto flex duration-200 opacity-0 group-hover:opacity-100 -translate-y-1'>{name}</span>
      <svg
     
      xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-map-pin" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
       {icon}</svg>
    </button>
  )
}
