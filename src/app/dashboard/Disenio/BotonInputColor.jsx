"use client";

import { useStoraStyle } from "@/context/DiseñoUser/contextStyles";
import useDragger from "@/hook/useDragger";
import { useState } from "react";
import { shallow } from "zustand/shallow";
import SelectorPorcentajesColor from "./SelectorPorcentajeColor";

export default function BotonInputColor({ name, width }) {
  const coordenadas = useDragger(name + "dragg");
  const guardarColores = useStoraStyle((state) => state.guardarColores);
  const guardarPorcentajes = useStoraStyle((state) => state.guardarPorcentajes);
  const { heroTarget } = useStoraStyle(
    (state) => ({
      heroTarget: state.heroTarget,
    }),
    shallow
  );

  const handleInput = (e) => {
    guardarColores(name, e.target.value);
    guardarPorcentajes(
      "porcentaje" + name,
      Math.trunc((coordenadas / width) * 100)
    );
          guardarColores(name, e.target.value);
  };
  const handlePorcentaje = () => {
    guardarPorcentajes(
        "porcentaje" + name,
        Math.trunc((coordenadas / width) * 100)
      );
  };
  return (
    <>
      <label
        style={{
          background: heroTarget[name],
          left: heroTarget["porcentaje" + name] + "%",
        }}
        htmlFor={name}
        id={name + "dragg"}
        className="rounded-t-lg border border-gray-500/70 active:shadow-md active:shadow-primary-400 cursor-pointer rounded-b-3xl w-8 mx-auto absolute h-8 items-center flex justify-center bg-red-500"
      >
          <SelectorPorcentajesColor porcentajeMarcador={coordenadas? Math.trunc((coordenadas / width) * 100):heroTarget["porcentaje" + name]}/>
        <input
          type="color"
          onClick={handlePorcentaje}
          onChange={handleInput}
          name={name}
          id={name}
          className="invisible"
        />
      </label>
    </>
  );
}
