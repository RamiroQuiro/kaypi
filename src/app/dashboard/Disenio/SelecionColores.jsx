"use client";
import { useState } from "react";
import BotonSelectorColores from "./BotonSelectorColores";
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
            <nav className="absolute z-30 top-20   left-0 w-full bg-white/90 backdrop-blur-sm p-4 shadow-md">
            <div className="flex px-10 justify-center   w-full h-full gap-10 items-center">
                <input type="color" name="" id="" />
                </div>
                </nav>
        )
      }
    </div>
  );
}
