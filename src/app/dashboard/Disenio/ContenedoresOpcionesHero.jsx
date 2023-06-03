import React from 'react'
import SelectorColores from './SelectorColores'
import SelectoresDegradadors from './SelectoresDegradadors'
import SelectorPaletaColores from './SelectorPaletaColores'

export default function ContenedoresOpcionesHero({heroTarget}) {
  return (
    <div className="flex flex-col h-2/3 px-3 py-5 justify-evenly gap-5 items-center w-full ">
    {/*  */}
    <SelectorColores heroTarget={heroTarget} />
    <SelectoresDegradadors heroTarget={heroTarget} />
    <SelectorPaletaColores />
  </div>
  )
}
