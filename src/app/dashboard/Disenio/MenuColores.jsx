import { useStoraStyle } from "@/context/DiseñoUser/contextStyles";
import SelectorColores from "./SelectorColores";
import SelectoresDegradadors from "./SelectoresDegradadors";
import SelectorPaletaColores from "./SelectorPaletaColores";
export default function MenuColores() {

  return (
    <nav className="absolute z-30 top-20 animate-[sliceUp_.5s]  left-0 w-full bg-white/70 backdrop-blur-sm p-4 shadow-md">
      <div className="flex px-10 justify-center   w-full h-full gap-10 items-stretch">
        {/*  */}
       <SelectoresDegradadors />
       <SelectorColores />
       <SelectorPaletaColores/>
      </div>
    </nav>
  );
}
