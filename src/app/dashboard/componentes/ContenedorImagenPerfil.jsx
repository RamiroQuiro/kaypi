import BackgroundDorm from "@/components/BackgroundDorm";
import CabeceraContenedor from "@/components/CabeceraContenedor";
import ContenedorInputFile from "./ContenedorInputFile";

export default function ContenedorImagenPerfil() {
  return (
    <BackgroundDorm>
      <CabeceraContenedor>
        <h2 className=" ">Sube tu foto o logo de perfil</h2>
      </CabeceraContenedor>
      <ContenedorInputFile />
    </BackgroundDorm>
  );
}
