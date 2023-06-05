"use client"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function BotonesDeNavBarTarjeta({onClick,icon,name}) {
  

  return (
    <button 
    id={name}
    name={name}
    onClick={onClick}
    className="hover:text-primary-100 block hover:-translate-y-1 cursor-pointer duration-200"
    >
      <FontAwesomeIcon icon={icon}/>
    </button>
  )
}
