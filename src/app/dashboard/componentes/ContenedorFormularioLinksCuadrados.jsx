import BackgroundDorm from "@/components/BackgroundDorm";
import CabeceraContenedor from "@/components/CabeceraContenedor";
import FormularioPrimerosLink from "./FormularioPrimerosLink";

export default function ContenedorFormularioLinksCuadrados() {
  return (
    <BackgroundDorm>
      <CabeceraContenedor>
        <h2 className="text-blueGray-700 md:text-xl ">
          Ingresa tus datos de contacto
        </h2>
      </CabeceraContenedor>
      <div className="flex-auto md:px-4 lg:px-4  pt-0">
        <FormularioPrimerosLink />
      </div>
    </BackgroundDorm>
  );
}
