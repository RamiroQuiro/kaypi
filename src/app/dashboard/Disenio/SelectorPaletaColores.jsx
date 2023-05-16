import React from "react";
import PaletasColores from "./PaletasColores";

export default function SelectorPaletaColores() {
  const paletaColores = [{ Color1: "#E11E48", Color2: "#F12A81" },
  { Color1: "#77B20B", Color2: "#D3CE10" },
  { Color1: "#C51A78", Color2: "#F5C021" },
  { Color1: "#FC9689", Color2: "#620D8A" },
  { Color1: "#71A9E6", Color2: "#5F79DE" },
  { Color1: "#FCA68A", Color2: "#FB3773" },
  { Color1: "#83D8FB", Color2: "#E1B4A1" },
  { Color1: "#F6A1FC", Color2: "#FD64FC" },
  { Color1: "#1C2928", Color2: "#194F2B" },
  { Color1: "#151112", Color2: "#251504" }
];
  return (
    <div className="relative  bg-gray-200 overflow-x-hidden w-full mx-auto p-4 rounded shadow">
      <h3 className="text-sm font-medium mb-4">Tipo de degradado</h3>
      <div className="flex flex-wrap gap-2 items-center mx-auto ">
        {
            paletaColores?.map((paleta,i)=>(
                <PaletasColores paleta={paleta} key={i} />
                
            ))}
      </div>
    </div>
  );
}
