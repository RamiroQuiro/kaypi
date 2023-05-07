import SectionTarjetaSola from "@/Tarjeta1/component/SectionTarjetaSola";
import SectionOutlet from "@/components/SectionOutlet";
import React from "react";
import NavDiseños from "./NavDiseños";

export default function Disenio() {
  return (
    <SectionOutlet>
      <NavDiseños/>
    
      <SectionTarjetaSola/>
    </SectionOutlet>
  );
}
