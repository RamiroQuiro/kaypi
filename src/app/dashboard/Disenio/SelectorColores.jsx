import BotonesSeleccionadoresColores from './BotonesSeleccionadoresColores'

export default function SelectorColores({heroTarget}) {
  return (
    <div className="relative  bg-gray-100 w-1/2 p-4 rounded shadow">
    <div className="mx-5">
    <h2 className="font-bold text-xs">Elige los colores </h2>
      <div className="relative w-full h-[3.625rem]">
        <div
         style={{
          left:heroTarget.porcentajeColor1+"%"
        }}
        className="h-8 flex flex-col items-center absolute top-0 left-0 -ml-2">
        <BotonesSeleccionadoresColores name={"color1"} />
        </div>
        <div 
        style={{
          left:heroTarget.porcentajeColor2+"%"
        }}
        className="h-12 flex  flex-col items-center absolute top-0 left-0 -ml-4">
        <BotonesSeleccionadoresColores name={"color2"} />
        </div>
      </div>
      <div
       style={{
        backgroundImage: `linear-gradient(90deg,${heroTarget.color1} ${heroTarget.porcentajeColor1}%,${heroTarget.color2} ${heroTarget.porcentajeColor2}%) `,
      }}
      className="h-10 w-full rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500"></div>
    </div>
  </div>
  )
}
