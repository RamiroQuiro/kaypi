
import TituloDescripcion from "./TituloDescripcion";
import ContenedorLinks from "./ContenedorLinks";

export default function DatosPerfil() {

  return (
    <div className="w-full mx-auto flex flex-col flex-grow items-center justify-evenly  text-gray-700 h-full ">
      <TituloDescripcion  />
      <ContenedorLinks />
    </div>
  );
}
