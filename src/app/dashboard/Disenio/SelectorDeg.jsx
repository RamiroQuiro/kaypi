import { useStoraStyle } from '@/context/DiseñoUser/contextStyles'
import React, { useState } from 'react'

export default function SelectorDeg() {
    const [grados, setGrados] = useState(0)
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
                className=" mb-1 text-sm font-medium uppercase text-center  rounded-full  my-5"
              >
                {grados}
                <input
                onMouseUp={handleGuardar}
                onChange={handleChange}
                  name="porcentaje"
                  type="range"
                  min="0"
                  max="360"
                  className="w-10/12 h-2 py-1 bg-gray-500 rounded-lg appearance-none cursor-pointer :bg-gray-50 "
                />
                </label>
  )
}
