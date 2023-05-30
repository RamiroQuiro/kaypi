"use client"
import { useContextDatosUser } from "@/context/datosUser/contextoDatosUser";
import DatosPerfil from "./DatosPerfil";
import ImagenPerfil from "./ImagenPerfil";
import LinksSquare from "./LinksSquare";

export default function HomeTarjeta() {


const userData=useContextDatosUser((state)=>({
  datos:state.datos
}))  

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
  
    >
      {" "}
      <ImagenPerfil />
      <div className="h-full flex py-5 flex-col items-center justify-evenly">
      <DatosPerfil userData={userData}/>
      <LinksSquare />
      </div>
    </div>
  );
}
