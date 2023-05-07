"use client";
import { useState } from "react";
import BotonSelectorColores from "./BotonSelectorColores";
import MenuColores from "./MenuColores";
export default function SelecionColores() {
  const [color, setColor] = useState("black");
  return (
    <div className="flex items-center space-x-4">
      <label htmlFor="colorSelect" className="font-bold">
        Colores
      </label>
      <BotonSelectorColores state={color} onClick={() => setColor(!color)} />
      <div class="relative ml-3 mt-8"></div>
      {
        color&&
        (
           <MenuColores/>
        )
      }
    </div>
  );
}
