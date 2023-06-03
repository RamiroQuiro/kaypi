"use client"
import { usePathname } from "next/navigation";
import DatosPerfil from "./DatosPerfil";
import ImagenPerfil from "./ImagenPerfil";
import LinksSquare from "./LinksSquare";
import { useContextVisitas } from "@/context/contextoVisita/contextoVistas";
import { useStoraStyle } from "@/context/DiseñoUser/contextStyles";
import { shallow } from "zustand/shallow";

export default function HomeTarjeta() {

  const pathURL=usePathname()
  let regex = /dashboard/;
  const { userData } = useContextVisitas(
    (state) => ({
      userData: state.userData,
    }),
    shallow
  );
  const userDatas = useStoraStyle(
    (state) => (state.styles),
    shallow
  );
  const styles=regex.test(pathURL) ? userDatas?.background: userData?.style?.background

  return (
    <div
    style={{
    background:`linear-gradient(to bottom,transparent,#F3F4F6) ${styles?.color}`}
  }
    className=" h-full w-full  z- flex flex-col items-center justify-between">
      {" "}
      <ImagenPerfil />
      <div className="h-2/3 w-full flex py-5 flex-col items-center justify-evenly">
        <DatosPerfil />
        <LinksSquare />
      </div>
    </div>
  );
}
