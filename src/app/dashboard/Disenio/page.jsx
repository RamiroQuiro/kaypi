import SectionTarjetaSola from "@/Tarjeta1/component/SectionTarjetaSola";
import SectionOutlet from "@/components/SectionOutlet";
import React from "react";

export default function Disenio() {
  return (
    <SectionOutlet>
      <nav className="absolute w-full top-0 left-20 h-20 mx-auto  bg-gray-50 shadow-md">
        <ul className="flex  items-center justify-center gap-7 h-full">
          <li>colores</li>
          <li>fuete</li>
          <li>noseqmas</li>
        </ul>
      </nav>
      <SectionTarjetaSola/>
    </SectionOutlet>
  );
}
