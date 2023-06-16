import SectionOutlet from '@/components/SectionOutlet'
import React from 'react'

export default function MiEmpresa({userDatos}) {
    console.log(userDatos)
  return (
    <SectionOutlet>
      <div>
        <h1>{userDatos?.datos?.name}</h1>
      </div>
      <div></div>
    </SectionOutlet>
  )
}
