"use client"
import DatosPerfil from "./DatosPerfil";
import ImagenPerfil from "./ImagenPerfil";
import LinksSquare from "./LinksSquare";
import { useStoraStyle } from "@/context/DiseñoUser/contextStyles";

export default function HomeTarjeta() {
  const activarSeccion=useStoraStyle(state=>state.activarSeccion)


  const selectID=(id)=>{
    activarSeccion(id)
  
  }
  

const userData={
  nombre:"Ramiro",
  apellido:"Quiroga",
  descripcion:"Tec en Redes de Ordenadores | DeveloperWeb",
  celular:156771992,
  email:"rama.exe.13@gmail.com",
  direccion:"El Rincon La banda",
  ciudad:"La Banda"
}

  return (
    <div
    onMouseDown={()=>selectID("bodyTarget")}
    id="bodyTarget"
    className="  z-20"
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
