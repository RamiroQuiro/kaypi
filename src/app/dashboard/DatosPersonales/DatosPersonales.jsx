"use client"
import {useEffect} from "react";
import {shallow  } from "zustand/shallow";
import BackgroundDorm from "../../../components/BackgroundDorm";
import SectionOutlet from "../../../components/SectionOutlet";
import FormularioDatos from "./FormularioDatos";
import CabeceraContenedor from "../../../components/CabeceraContenedor";

export default function DatosPersonalesIndex() {



  return (
    <SectionOutlet>
     <BackgroundDorm>
        <CabeceraContenedor >
          <div className="text-center flex justify-between">
            <h3 className="text-blueGray-700 text-xl font-bold">Mis Datos</h3>
          </div>
        </CabeceraContenedor>
        <div className="flex-auto md:px-4 lg:px-4 py-10 pt-0">
          <FormularioDatos />
        </div>
      </BackgroundDorm>
    </SectionOutlet>
  );
}
