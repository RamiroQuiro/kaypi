import DatosPerfil from "./DatosPerfil";
import ImagenPerfil from "./ImagenPerfil";
import LinksSquare from "./LinksSquare";

export default function HomeTarjeta() {
  // const activarSeccion=useStoraStyle(state=>state.activarSeccion)

  // const selectID=(id)=>{
  //   activarSeccion(id)

  // }

  // const userData={
  //   nombre:"Ramiro",
  //   apellido:"Quiroga",
  //   descripcion:"Tec en Redes de Ordenadores | DeveloperWeb",
  //   celular:156771992,
  //   email:"rama.exe.13@gmail.com",
  //   direccion:"El Rincon La banda",
  //   ciudad:"La Banda"
  // }

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
