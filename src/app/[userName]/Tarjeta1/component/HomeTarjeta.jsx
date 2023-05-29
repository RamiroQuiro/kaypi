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
    <div
    className="  z-20"
    >
      {" "}
      <ImagenPerfil />
      <div className="h-full flex py-5 flex-col items-center justify-evenly">
      <DatosPerfil/>
      <LinksSquare />
      </div>
    </div>
  );
}
