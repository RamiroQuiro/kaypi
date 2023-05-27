import SectionOutlet from "@/components/SectionOutlet";
import InfoDasboard from "./componentes/InfoDasboard";
import ContenedorFormularioLinksCuadrados from "./componentes/ContenedorFormularioLinksCuadrados";
import ContenedorFormularioEnlaces from "./componentes/ContenedorFormularioEnlaces";
import { Toaster } from "react-hot-toast";

export default function DashboardHome() {
 
  return (
    <SectionOutlet>
        <InfoDasboard />
        <div className="w-full flex md:flex-row flex-col gap-5 items-start justify-between">
          <ContenedorFormularioEnlaces />
          <ContenedorFormularioLinksCuadrados />
        </div>
        <Toaster />
    </SectionOutlet>
  );
}
