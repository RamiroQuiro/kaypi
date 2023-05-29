"use client"
import InputFormularioDatos from "@/components/InputFormularioDatos";
import { useContextDatosUser } from "@/context/datosUser/contextoDatosUser";
import { useEffect, useState } from "react";
import BotonGuardar from "../../componentes/BotonGuardar";
import { faGbp, faLocationCrosshairs } from "@fortawesome/free-solid-svg-icons";

export default function Ubicacion() {
  const guardarSecciones = useContextDatosUser(
    (state) => state.guardarSecciones
    );
    const { userData } = useContextDatosUser((state) => ({
      userData: state.userData,
    }));
    const [formEntry, setFormEntry] = useState(userData?.secciones?.ubicacion)

   useEffect(() => {
     setFormEntry(userData?.secciones?.ubicacion);
   }, [userData]);

  const handleOnChange = (e) => {
  setFormEntry(e.target.value );
  };

  const handleGaurdarDatos = async (e) => {
    e.preventDefault();
    guardarSecciones("ubicacion",formEntry);
  };
  return (
    <div className="flex  flex-col w-full mx-auto py-10 px-5">
      <section className="text-gray-700 rounded  relative">
        <InputFormularioDatos
        value={formEntry}
        faIcon={faLocationCrosshairs}
        onChange={handleOnChange}
        >
          Pega aqui el enlace de tu ubicacion
        </InputFormularioDatos>
      </section>
        <BotonGuardar
        onClick={handleGaurdarDatos}
        >Guardar Ubicación</BotonGuardar>
        {
!formEntry?null
:

          <div className=" h- inset-0 rounded bg-gray-300">
          <iframe
            width="100%"
            height="100%"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
            title="map"
            className="rounded "
            src={"https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1766.0988753029983!2d-64.26470562148779!3d-27.711179999022658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjfCsDQyJzQwLjMiUyA2NMKwMTUnNDkuMCJX!5e0!3m2!1ses!2sar!4v1685283780309!5m2!1ses!2sar"}
            // src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
            ></iframe>
        </div>
          }
    </div>
  );
}
