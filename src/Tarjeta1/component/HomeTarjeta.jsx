import React from "react";
import DatosPerfil from "./DatosPerfil";
import ImagenPerfil from "./ImagenPerfil";
import LinksSquare from "./LinksSquare";

export default function HomeTarjeta() {

const userData={
  celular:156771992,
  email:"rama.exe.13@gmail.com",
  direccion:"El Rincon La banda",
  ciudad:"La Banda"
}

  return (
    <>
      {" "}
      <ImagenPerfil />
      <DatosPerfil userData={userData}/>
      <LinksSquare />
    </>
  );
}
