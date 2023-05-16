"use client";
import { useState } from "react";
import BotonSelectorColores from "./BotonSelectorColores";
import MenuColores from "./MenuColores";
export default function SelecionColores() {
  const [color, setColor] = useState(false);
  return (
    <div className="flex items-center space-x-4">
     

      {
        color&&
        (
           <MenuColores/>
        )
      }
    </div>
  );
}
