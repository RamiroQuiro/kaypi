"use client"
import { useStoraStyle } from "@/context/DiseñoUser/contextStyles";
import BotonInputColor from "./BotonInputColor";
import ContenedorBotonesSelectoresColores from "./ContenedorBotonesSelectoresColores";
import useWidth from "@/hook/useWidth";

export default function SelectorColores() {
  const { styles } = useStoraStyle((state) => ({
    styles: state.styles,
  }));
  const heroTarget=styles.heroTarget

  const stylesGradien = {
    conic: `conic-gradient(${heroTarget?.Color1} ${heroTarget?.porcentajeColor1}%,${heroTarget?.Color2} ${heroTarget?.porcentajeColor1}%) `,
    radial: `radial-gradient(circle at bottom, ${heroTarget?.Color1} ${heroTarget?.porcentajeColor1}%,${heroTarget?.Color2}  ${heroTarget?.porcentajeColor2}%) `,
    linear: `linear-gradient(${heroTarget?.deg}deg, ${heroTarget?.Color1}  ${heroTarget?.porcentajeColor1}%,${heroTarget?.Color2}  ${heroTarget?.porcentajeColor2}%) `,
  };

const width=useWidth("contenedorSelector")


  return (
    <div className="relative h-1/4  bg-gray-200 overflow-x-hidden w-full p-4 rounded shadow">
        <div 
        id="contenedorSelector"
        className="relative w-full overflow- h-10">
           <BotonInputColor
          width={width}
          name={"Color1"}
          key={1}
          />
            <BotonInputColor
          width={width}
            name={"Color2"}
            key={2}
          />
        </div>
        <div
          style={{
            backgroundImage: stylesGradien[heroTarget?.degradado],
          }}
          className="h-7 w-full z-10 rounded-lg bg-gradient-to-r from-primary-100 to-primary-200"
        ></div>
    </div>
  );
}
