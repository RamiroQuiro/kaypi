"use client"
import { useStoraStyle } from '@/context/DiseñoUser/contextStyles'

export default function BotonColoresBackgroun({paleta}) {
    const guardarColores=useStoraStyle(state=>state.guardarColores)
const handleGuardarPaleta=()=>{
    guardarColores("background","color",paleta.Color1)
}
  
  return (
    <button
    onClick={handleGuardarPaleta}
    style={{
      background: `linear-gradient(75deg, #f3f3f3 0%, ${paleta.Color1} 90%)`,
    }}
    className={`border rounded w-12 h-16 p-1 cursor-pointer`}
  ></button>
  )
}
