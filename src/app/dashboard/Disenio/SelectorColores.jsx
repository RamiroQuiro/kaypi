"use client"
import ContenedorBotonesSelectoresColores from "./ContenedorBotonesSelectoresColores";
import useWidth from "@/hook/useWidth";

export default function SelectorColores({ heroTarget }) {
  const styles = {
    conic: `conic-gradient(${heroTarget.color1} 0%,${heroTarget.color2} 80%) `,
    radial: `radial-gradient(${heroTarget.color1} 0%,${heroTarget.color2} 80%) `,
    linear: `linear-gradient(90deg, ${heroTarget.color1} 0%,${heroTarget.color2} 80%) `,
  };

const width=useWidth("contenedorSelector")
console.log(7/width*100)


  return (
    <div className="relative  bg-gray-100 w-1/2 p-4 rounded shadow">
      <div className="mx-5">
        <h2 className="font-bold text-xs">Elige los colores </h2>
        <div 
        id="contenedorSelector"
        className="relative w-full overflow-hidden h-10">
          <ContenedorBotonesSelectoresColores
          width={width}
          name={"color1"}
          porcentajeColor={heroTarget.porcentajeColor1}
          key={1}
          />
          <ContenedorBotonesSelectoresColores
          width={width}
            name={"color2"}
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
