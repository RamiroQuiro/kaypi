"use client";

import { useStoraStyle } from "@/context/DiseñoUser/contextStyles";
import { shallow } from "zustand/shallow";
import BotonGuardar from "../componentes/BotonGuardar";
import { useContextDatosUser } from "@/context/datosUser/contextoDatosUser";
import { useState } from "react";
import SelectoresDeDiseños from "./selectoresDeDiseños";

export default function SidebarDiseño() {
  const [selectBoton, setSelectBoton] = useState("superior");
  const userActivo = useContextDatosUser((state) => state.userActivo);
  const guardarFirestore = useStoraStyle((state) => state.guardarFirestore);
  const { heroTarget } = useStoraStyle(
    (state) => ({
      heroTarget: state.heroTarget,
    }),
    shallow
  );
  const handleGuardar = (e) => {
    e.preventDefault();
    guardarFirestore(userActivo.uid);
  };

  const selectorBotnes = (e) => {
    e.preventDefault();
    setSelectBoton(e.target.name);
  };

  return (
    <aside className="absolute right-0 py-5 bg-white top-0 pt-20 z-0 w-1/6 h-full shadow-lg ">
      <div className="h- flex flex-col items-center  justify-between">
        <div className="w-11/12 flex items-center justify-evenly  bg-gray-200 overflow-x-hidden py-2.5 rounded shadow">
          {["superior", "fondo", "letras"].map((boton, i) => (
            <BotonGuardar
              onClick={selectorBotnes}
              name={boton}
              key={i}
              className={`${boton==selectBoton&& "bg-primary-200 text-white"} bg-white rounded-2xl hover:bg-primary-200 hover:text-white`}
            >
              {boton}
            </BotonGuardar>
          ))}
        </div>

        <SelectoresDeDiseños heroTarget={heroTarget} name={selectBoton} />

        <BotonGuardar
          onClick={handleGuardar}
          className="w-11/12 flex items-center justify-evenly  bg-gray-200 "
        >
          Guardar Estilos
        </BotonGuardar>
      </div>
    </aside>
  );
}
