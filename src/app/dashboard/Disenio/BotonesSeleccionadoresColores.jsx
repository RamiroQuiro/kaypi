"use client";
import { useStoraStyle } from "@/context/DiseñoUser/contextStyles";
import { useState } from "react";
import { ChromePicker, SketchPicker } from "react-color";

export default function BotonesSeleccionadoresColores({name}) {
  const [background, setBackground] = useState({
    color1: "#c5c5c5",
    color2: "#e1e1e1",
  });

  const guardarColores=useStoraStyle((state)=>state.guardarColores)

  const [open, setOpen] = useState(false);

  const handleChangeComplete = (background) => {
    setBackground({[name]: background.hex });
    guardarColores(name,background.hex)
  };
  return (
    <button
      name={name}
      onClick={() => setOpen(!open)}
      style={{
        backgroundColor: background[name],
      }}
      className={`w-8 h-8 rounded-lg cursor-pointer group  `}
    >
      {open && (
        <SketchPicker
          className="mt-5 ml-10 animate-[aparecer_.5s]"
          color={background}
          
          onChange={handleChangeComplete}
        //   onChangeComplete={handleChangeComplete}
        />
      )}
    </button>
  );
}
