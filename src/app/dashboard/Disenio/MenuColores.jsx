import BotonesSeleccionadoresColores from "./BotonesSeleccionadoresColores";
import { useStoraStyle } from "@/context/DiseñoUser/contextStyles";
export default function MenuColores() {
    const { color } = useStoraStyle((state) => ({
      color: state.color,
    }));
  return (
    <nav className="absolute z-30 top-20 animate-[sliceUp_.5s]  left-0 w-full bg-white/70 backdrop-blur-sm p-4 shadow-md">
      <div className="flex px-10 justify-center   w-full h-full gap-10 items-center">
        {/*  */}
       
        <div className="relative rounded-xl bg-gray-100 w-1/2 p-4">
          <div className="mx-5">
          <h2 className="font-bold text-xs">Elige los colores </h2>
            <div className="relative w-full h-[3.625rem]">
              <div
               style={{
                left:color.porcentajeColor1+"%"
              }}
              className="h-8 flex flex-col items-center absolute top-0 left-0 -ml-2">
              <BotonesSeleccionadoresColores name={"color1"} />
              </div>
              <div 
              style={{
                left:color.porcentajeColor2+"%"
              }}
              className="h-12 flex  flex-col items-center absolute top-0 left-0 -ml-4">
              <BotonesSeleccionadoresColores name={"color2"} />
              </div>
            </div>
            <div
             style={{
              backgroundImage: `linear-gradient(90deg,${color.color1} ${color.porcentajeColor1}%,${color.color2} ${color.porcentajeColor2}%) `,
            }}
            className="h-10 w-full rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500"></div>
          </div>
        </div>
      </div>
    </nav>
  );
}
