"use client";
import { useStoraStyle } from "@/context/DiseñoUser/contextStyles";
import { useState } from "react";
import { ChromePicker, SketchPicker } from "react-color";

export default function BotonesSeleccionadoresColores({name}) {
 

  const [open, setOpen] = useState(false);
  const guardarColores=useStoraStyle((state)=>state.guardarColores)

  const {heroTarget}=useStoraStyle((state)=>({
    heroTarget:state.heroTarget
  }))

  const handleChangeComplete = (background) => {
    guardarColores(name,background.hex)
  };
  return (
    <button
      name={name}
      onClick={() => setOpen(!open)}
      style={{
        backgroundColor: heroTarget[name],
      }}
      className={`w-8 h-8 border shadow-md rounded-lg cursor-pointer group  `}
    >
      {open && (
        <SketchPicker
          className="mt-10 ml-10 animate-[aparecer_.5s]"
        
          onChange={handleChangeComplete}
        //   onChangeComplete={handleChangeComplete}
        />
      )}
    </button>
  );
}
