import DatosPerfil from "./DatosPerfil";
import ImagenPerfil from "./ImagenPerfil";
import LinksSquare from "./LinksSquare";

export default function HomeTarjeta({estilos,userDatos}) {
  return (
    <div
      style={{
        background: `linear-gradient(to bottom,transparent,#F3F4F6) ${estilos?.background?.color}`,
      }}
      className=" h-full w-full  z- flex flex-col items-center justify-between animate-[aparecer_.5s]"
    >
        <ImagenPerfil styles={estilos} />
      <div className="h-2/3 w-full flex py-5 flex-col items-center justify-evenly">
        <DatosPerfil />
        <LinksSquare userData={userDatos} />
      </div>
    </div>
  );
}
