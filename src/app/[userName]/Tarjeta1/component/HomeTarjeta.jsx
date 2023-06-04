"use client";
import { usePathname } from "next/navigation";
import DatosPerfil from "./DatosPerfil";
import ImagenPerfil from "./ImagenPerfil";
import LinksSquare from "./LinksSquare";
import { useContextVisitas } from "@/context/contextoVisita/contextoVistas";
import { useStoraStyle } from "@/context/DiseñoUser/contextStyles";
import { shallow } from "zustand/shallow";
import { useEffect, useState } from "react";
import { useContextDatosUser } from "@/context/datosUser/contextoDatosUser";

export default function HomeTarjeta() {
  const [loading, setLoading] = useState(false);
  const pathURL = usePathname();
  const [estilos, setEstilos] = useState(null);
  const [userDatos, setUserDatos] = useState(null);
  let regex = /dashboard/;
  const { userData } = useContextVisitas(
    (state) => ({
      userData: state.userData,
    }),
    shallow
  );
  const userDatas = useStoraStyle((state) => state.styles, shallow);

  const userDatosUser = useContextDatosUser((state) => state.userData.datos);

  useEffect(() => {
    const userDatosRegex = regex.test(pathURL)
      ? userDatosUser
      : userData?.datos;
    const styles = regex.test(pathURL) ? userDatas : userData?.style;

    const cargandoData = () => {
      setEstilos(styles);
      setUserDatos(userDatosRegex);
      setLoading(true);
    };
    cargandoData();
  }, [userData, userDatas, loading]);


  if (!loading) return <div>Cargando...</div>

  return (
    <div
      style={{
        background: `linear-gradient(to bottom,transparent,#F3F4F6) ${estilos?.background?.color}`,
      }}
      className=" h-full w-full  z- flex flex-col items-center justify-between"
    >
        <ImagenPerfil styles={estilos} />
      <div className="h-2/3 w-full flex py-5 flex-col items-center justify-evenly">
        <DatosPerfil />
        <LinksSquare userData={userDatos} />
      </div>
    </div>
  );
}
