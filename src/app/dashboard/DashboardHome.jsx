import SectionOutlet from "@/components/SectionOutlet";
import InfoDasboard from "./componentes/InfoDasboard";
import ContenedorFormularioLinksCuadrados from "./componentes/ContenedorFormularioLinksCuadrados";
import ContenedorFormularioEnlaces from "./componentes/ContenedorFormularioEnlaces";
import ContenedorImagenPerfil from "./componentes/ContenedorImagenPerfil";

export default function DashboardHome() {
  return (
    <SectionOutlet>
      <div className="flex flex-col md:w-10/12 w-full gap-10 items-center justify-between">
        <InfoDasboard />
        <div className="w-full flex md:flex-row flex-col gap-5 items-start justify-between">
          <ContenedorFormularioEnlaces />
          <div className="relative flex flex-col gap-10 min-w-0 break-words w-full md:w-10/12 pb-5 md:mt-0 ">
           <ContenedorImagenPerfil/>
            <ContenedorFormularioLinksCuadrados />
          </div>
        </div>
      </div>
    </SectionOutlet>
  );
}
