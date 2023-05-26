import BackgroundDorm from "@/components/BackgroundDorm";
import CabeceraContenedor from "@/components/CabeceraContenedor";
import React from "react";
import ContenedorInputEnlaces from "./ContenedorInputEnlaces";
import ContenedoresEnlacesExistentes from "./ContenedoresEnlacesExistentes";

export default function ContenedorFormularioEnlaces() {
  return (
    <BackgroundDorm>
      <CabeceraContenedor>
        <h2 className=" ">
         Tus Enlaces Directos
        </h2>
      </CabeceraContenedor>
      <div className="flex-auto w-11/12 md:w-full md:px-4 lg:px-4 mx-auto  pt-12">
        <ContenedorInputEnlaces />
      </div>
      <br />
      <ContenedoresEnlacesExistentes />
    </BackgroundDorm>
  );
}
