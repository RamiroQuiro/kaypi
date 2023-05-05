import SectionOutlet from "@/components/SectionOutlet";
import InfoDasboard from "./componentes/InfoDasboard";
import FormularioPrimerosLink from "./componentes/FormularioPrimerosLink";
import BackgroundDorm from "@/components/BackgroundDorm";
import CabeceraContenedor from "@/components/CabeceraContenedor";

export default function DashboardHome() {
  return (
   <SectionOutlet>
    <div className="flex justify-between items-stretch gap-5">

        <InfoDasboard />

        <BackgroundDorm>
          <CabeceraContenedor>
            <h2 className="text-blueGray-700 md:text-xl font-bold">
              Link a compartir en primer plano
            </h2>
          </CabeceraContenedor>
          <div className="flex-auto md:px-4 lg:px-4  pt-0">
            <FormularioPrimerosLink />
          </div>
        </BackgroundDorm>
    </div>
    </SectionOutlet>
    );
}
