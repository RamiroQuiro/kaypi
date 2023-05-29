"use client";

import { useStoraStyle } from "@/context/DiseñoUser/contextStyles";
import useDragger from "@/hook/useDragger";
import { shallow } from "zustand/shallow";
import SelectorPorcentajesColor from "./SelectorPorcentajeColor";

export default function BotonInputColor({ name, width }) {
  const {nextX} = useDragger(name + "dragg");
  const guardarColores = useStoraStyle((state) => state.guardarColores);
  const guardarPorcentajes = useStoraStyle((state) => state.guardarPorcentajes);
  const { styles } = useStoraStyle(
    (state) => ({
      styles: state.styles,
    }),
    shallow
  );

  const handleInput = (e) => {
    guardarColores(name, e.target.value);
    guardarPorcentajes(
      "porcentaje" + name,
      Math.trunc((nextX / width) * 100)
    );
          guardarColores(name, e.target.value);
  };
  const handlePorcentaje = () => {
    guardarPorcentajes(
        "porcentaje" + name,
        Math.trunc((nextX / width) * 100)
      );
  };
  return (
    <>
      <label
        style={{
          background: styles?.heroTarget[name],
          left: styles?.heroTarget["porcentaje" + name] + "%",
        }}
        htmlFor={name}
        id={name + "dragg"}
        className="rounded-t-lg border border-gray-500/70 active:shadow-md active:shadow-primary-400 cursor-pointer rounded-b-3xl w-7 mx-auto absolute h-7 items-center flex justify-center"
      >
          <SelectorPorcentajesColor porcentajeMarcador={nextX? Math.trunc((nextX / width) * 100):styles?.heroTarget["porcentaje" + name]}/>
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
