import React from "react";
import PaletasColores from "./PaletasColores";

export default function SelectorPaletaColores() {
  const paletaColores = [{ Color1: "#56028B", Color2: "#F12A81" },
  { Color1: "#77B20B", Color2: "#D3CE10" },
  { Color1: "#C51A78", Color2: "#F5C021" },
  { Color1: "#FC9689", Color2: "#620D8A" },
  { Color1: "#F6C920", Color2: "#F12A81" },
  { Color1: "#EB9B1C", Color2: "#FC7A7A" }];
  return (
    <div className="relative  bg-gray-100 overflow-x-hidden  p-4 rounded shadow">
      <h3 className="text-sm font-medium mb-4">Tipo de degradado</h3>
      <div className="flex flex-wrap gap-2 items-center ">
        {
            paletaColores?.map((paleta,i)=>(
                <PaletasColores paleta={paleta} key={i} />
                
            ))}
      </div>
    </div>
  );
}
