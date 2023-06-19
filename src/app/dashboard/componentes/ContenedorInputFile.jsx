"use client"
import {useEffect, useState} from 'react'
import BotonGuardar from './BotonGuardar'

export default function ContenedorInputFile() {
const [file, setFile] = useState(null)


    useEffect(() => {
      
    
      return () => {
        
      }
    }, [])

    const handleImage=(e)=>{
console.log(e)
    }

    const cargarImagen=()=>{

    }
  return (
    <div className="flex-auto w-11/12 md:w-full md:px-4 lg:px-4 mx-auto  flex items-center justify-between px-5 pt-5">
    <label
      htmlFor="fotoInput"
      className="rounded-full w-36 h-36 bg-gray-100 border-primary-100/50 border-y-2 cursor-pointer flex items-center justify-center mx-auto"
    >
      <span className="text-xs mx-auto text-center">
        Click aqui para cargar tu imagen
      </span>
      <input onChange={handleImage} type="file" name="perfil" id="fotoInput" className="hidden" />
    </label>
    <BotonGuardar onClick={cargarImagen}>Guardar Imagen</BotonGuardar>
  </div>
  )
}
