import BotonesSeleccionadoresColores from "./BotonesSeleccionadoresColores";

export default function MenuColores() {

  return (
    <nav className="absolute z-30 top-20 animate-[sliceUp_.5s]  left-0 w-full bg-white/90 backdrop-blur-sm p-4 shadow-md">
      <div className="flex px-10 justify-center   w-full h-full gap-10 items-center">
        {/*  */}
        <h2 className="font-bold text-xs">Elige los colores </h2>
      <BotonesSeleccionadoresColores name={"color1"}/>
      <BotonesSeleccionadoresColores name={"color2"}/>
     
      </div>
    </nav>
  );
}
