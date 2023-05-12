"use client";

import { useStoraStyle } from "@/context/DiseñoUser/contextStyles";
import useDragger from "@/hook/useDragger";
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
        className="rounded-t-lg rounded-b-3xl w-10 absolute h-10 bg-red-500"
      >
        {heroTarget["porcentaje" + name] + "%"}
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
