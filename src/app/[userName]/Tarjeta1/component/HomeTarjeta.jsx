import DatosPerfil from "./DatosPerfil";
import ImagenPerfil from "./ImagenPerfil";
import LinksSquare from "./LinksSquare";

export default function HomeTarjeta() {


  return (
    <div className=" h-full w-full  z-20 flex flex-col items-center justify-between">
      {" "}
      <ImagenPerfil />
      <div className="h-2/3 w-full flex py-5 flex-col items-center justify-evenly">
        <DatosPerfil />
        <LinksSquare />
      </div>
    </div>
  );
}
