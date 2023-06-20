import React from 'react'
import InputFileGaleria from './InputFileGaleria'
import GaleriaFotosExistentes from './GaleriaFotosExistentes'

export default function Multimedia() {
  return (
    <div className="flex items-center justify-between flex-col w-full mx-auto py-10 px-5">
        <div className='border-b-2 flex flex-col w-full border-primary-100/50'>
        <InputFileGaleria/> 
          </div>      
          <GaleriaFotosExistentes/>

      
    </div>
  )
}
