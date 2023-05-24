"use client";

import { useStoraStyle } from "@/context/DiseñoUser/contextStyles";
import SelectorColores from "./SelectorColores";
import SelectorPaletaColores from "./SelectorPaletaColores";
import SelectoresDegradadors from "./SelectoresDegradadors";
import { shallow } from "zustand/shallow";
import BotonSelectorColores from "./BotonSelectorColores";

export default function SidebarDiseño() {
  const { heroTarget, activo } = useStoraStyle(
    (state) => ({
      heroTarget: state.heroTarget,
      activo: state.activo,
    }),
    shallow
  );

  return (
    <aside className="absolute right-0 py-5 bg-white top-5 pt-20 z-0 w-1/6 h-full shadow-lg ">
     <div className="h- flex flex-col items-center  justify-between">
     <div className="w-11/12 flex items-center justify-evenly  bg-gray-200 overflow-x-hidden p-4 rounded shadow">
      <h2 htmlFor="colorSelect" className="font-bold  ">
        Colores
      </h2>
      <svg
          className="w-6 h-6 "
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path
            fill="none"
            d="M15.584 10.001L13.998 8.417 5.903 16.512 5.374 18.626 7.488 18.097z"
          />
          <path d="M4.03,15.758l-1,4c-0.086,0.341,0.015,0.701,0.263,0.949C3.482,20.896,3.738,21,4,21c0.081,0,0.162-0.01,0.242-0.03l4-1 c0.176-0.044,0.337-0.135,0.465-0.263l8.292-8.292l1.294,1.292l1.414-1.414l-1.294-1.292L21,7.414 c0.378-0.378,0.586-0.88,0.586-1.414S21.378,4.964,21,4.586L19.414,3c-0.756-0.756-2.072-0.756-2.828,0l-2.589,2.589l-1.298-1.296 l-1.414,1.414l1.298,1.296l-8.29,8.29C4.165,15.421,4.074,15.582,4.03,15.758z M5.903,16.512l8.095-8.095l1.586,1.584 l-8.096,8.096l-2.114,0.529L5.903,16.512z" />
        </svg>
      </div>
      <div className="flex flex-col h-2/3 px-3 py-5 justify-evenly gap-5 items-center w-full ">
        {/*  */}
        <SelectorColores heroTarget={heroTarget} />
        <SelectoresDegradadors heroTarget={heroTarget} />
        <SelectorPaletaColores />
      </div></div>
    </aside>
  );
}
