"use client"
import ContenedorBotonesSelectoresColores from "./ContenedorBotonesSelectoresColores";
import useWidth from "@/hook/useWidth";

export default function SelectorColores({ heroTarget }) {
  const styles = {
    conic: `conic-gradient(${heroTarget.Color1} ${heroTarget.porcentajeColor1}%,${heroTarget.Color2} ${heroTarget.porcentajeColor1}%) `,
    radial: `radial-gradient(${heroTarget.Color1} ${heroTarget.porcentajeColor1}%,${heroTarget.Color2}  ${heroTarget.porcentajeColor2}%) `,
    linear: `linear-gradient(90deg, ${heroTarget.Color1}  ${heroTarget.porcentajeColor1}%,${heroTarget.Color2}  ${heroTarget.porcentajeColor2}%) `,
  };

const width=useWidth("contenedorSelector")


  return (
    <div className="relative  bg-gray-100 w-1/2 p-4 rounded shadow">
      <div className="mx-5">
        <h2 className="font-bold text-xs">Elige los colores </h2>
        <div 
        id="contenedorSelector"
        className="relative w-full overflow-hidden h-10">
          <ContenedorBotonesSelectoresColores
          width={width}
          name={"Color1"}
          porcentajeColor={heroTarget.porcentajeColor1}
          key={1}
          />
          <ContenedorBotonesSelectoresColores
          width={width}
            name={"Color2"}
            porcentajeColor={heroTarget.porcentajeColor2}
            key={2}
          />
        </div>
        <div
          style={{
            backgroundImage: styles[heroTarget.degradado],
          }}
          className="h-10 w-full rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500"
        ></div>
      </div>
    </div>
  );
}
