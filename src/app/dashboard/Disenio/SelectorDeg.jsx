import { useStoraStyle } from '@/context/DiseñoUser/contextStyles'
import React, { useState } from 'react'

export default function SelectorDeg({heroTarget}) {
    const [grados, setGrados] = useState(heroTarget.deg)
    const guardarDeg=useStoraStyle(state=>state.guardarDeg)

    const handleChange=(e)=>{
setGrados(e.target.value)

    }
    const handleGuardar=()=>{
guardarDeg(grados)
    }

  return (
               <label
                for="default-range"
                className="flex flex-col mb-1 text-sm font-medium uppercase mx-auto items-center text-center   my-1 "
              >
                <span>{grados}°</span>
                <input
                onMouseUp={handleGuardar}
                onChange={handleChange}
                value={grados}
                  name="porcentaje"
                  type="range"
                  min="0"
                  max="360"
                  className="w-8/12 h-2 py-1 bg-primary-100/80 rounded-lg appearance-none cursor-pointer  "
                />
                </label>
  )
}
