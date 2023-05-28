import NavBar from "@/components/NavBar/NavBar";
import { Inter } from "next/font/google";
import TabsSeccion from "./Component/TabsSeccion";
import SectionOutlet from "@/components/SectionOutlet";
import BackgroundDorm from "@/components/BackgroundDorm";
import CabeceraContenedor from "@/components/CabeceraContenedor";
import BotonGuardar from "../componentes/BotonGuardar";
import FormularioSecciones from "./FormularioSecciones";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  
  title: 'Kaipy Design | Secciones',
  description: 'Tarjetas de presentacion digital',}

export default function SeccionLayout({ children }) {
  
  return (
    <SectionOutlet>
      <div className="flex flex-col w-full mt-10 md:mt-0 gap-10">
        <BackgroundDorm>
          <CabeceraContenedor>
            <h2 className="text-blueGray-700 text-xl font-bold">
              Secciones a integrar en tu Tarjeta
            </h2>
          </CabeceraContenedor>
    <FormularioSecciones>
      {children}
    </FormularioSecciones>
        </BackgroundDorm>
      </div>
    </SectionOutlet>
  );
}
