"use client";
import { useState } from "react";
import { ChromePicker, SketchPicker } from "react-color";

export default function BotonesSeleccionadoresColores() {
  const [background, setBackground] = useState({
    color1: "#c5c5c5",
    color2: "#e1e1e1",
  });
  const [open, setOpen] = useState(false);

  const handleChangeComplete = (e, background) => {
    setBackground({ [e.name]: background.hex });
  };
  return (
    <button
      name="color1"
      onClick={() => setOpen(!open)}
      style={{
        backgroundColor: background.color1,
      }}
      className={`w-8 h-8 rounded-lg cursor-pointer group  `}
    >
      {open && (
        <SketchPicker
          className="mt-5 ml-10 animate-[aparecer_.5s]"
          color={background}
          onChange={handleChangeComplete}
          onChangeComplete={handleChangeComplete}
        />
      )}
    </button>
  );
}
