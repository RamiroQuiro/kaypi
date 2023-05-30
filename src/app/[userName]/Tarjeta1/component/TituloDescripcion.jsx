"use client"
import { useStoraStyle } from "@/context/DiseñoUser/contextStyles";
import { useContextVisitas } from "@/context/contextoVisita/contextoVistas";
import { useContextDatosUser } from "@/context/datosUser/contextoDatosUser";
import {  usePathname } from "next/navigation";
import { shallow } from "zustand/shallow";

export default function TituloDescripcion({  }) {
  const pathURL=usePathname()
  let regex = /dashboard/;

  const {userData}=useContextVisitas(state=>({
    userData:state.userData
  }),shallow)
 const userDatosUser=useContextDatosUser((state)=>(state.userData.datos))
  

  const userDatas = useStoraStyle(
    (state) => (state.styles),
    shallow
  );
  const styles=regex.test(pathURL) ? userDatas : userData?.style

  return (
    <div className="w-full flex flex-col items-center justify-between">
      <h1
      style={{
        backgroundImage:`linear-gradient(75deg,${styles?.heroTarget.Color1}  70%,${styles?.heroTarget.Color2}  90%) `
      }}
      className=" text-xl font-bold capitalize text-transparent text-center bg-clip-text bg-gradient-to-r to-cyan-600 from-teal-800 animate-[sliceUp_1.5s] delay-100">
        {!regex.test(pathURL)? userData?.datos?.nombreApellido : userDatosUser?.nombreApellido}
      </h1>
      <h2 className="text-lg font-light">
        {!regex.test(pathURL)? userData?.datos?.profesion : userDatosUser?.profesion}

      </h2>
      <span className=" text-sm font-thin mt-2 px-5 text-center animate-[sliceUp_2s] delay-200">
        {!regex.test(pathURL)? userData?.datos?.descripcion :userDatosUser?.descripcion }
      </span>
    </div>
  );
}
