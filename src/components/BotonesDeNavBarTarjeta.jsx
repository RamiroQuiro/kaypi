"use client"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React from 'react'

export default function BotonesDeNavBarTarjeta({link,icon}) {
  return (
    <Link 
    href={link}
    className="hover:text-primary-100 hover:-translate-y-1 cursor-pointer duration-200"
    >
        <FontAwesomeIcon icon={icon} />
    </Link>
  )
}
