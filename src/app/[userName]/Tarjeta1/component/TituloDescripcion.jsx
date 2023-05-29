"use client"
import { useStoraStyle } from "@/context/DiseñoUser/contextStyles";
import { useParams } from "next/navigation";
import { shallow } from "zustand/shallow";

export default function TituloDescripcion({ userData }) {

  const params=useParams()
  console.log(params)
  const {heroTarget}=useStoraStyle(state=>({
    heroTarget:state.heroTarget
  }),shallow)
  console.log(heroTarget)
  return (
    <div>
      <h1
      style={{
        backgroundImage:`linear-gradient(75deg,${heroTarget.Color1}  70%,${heroTarget.Color2}  90%) `
      }}
      className=" text-3xl font-bold text-transparent text-center bg-clip-text bg-gradient-to-r to-cyan-600 from-teal-800 animate-[sliceUp_1.5s] delay-100">
        {userData?.nombre} {userData?.apellido}
      </h1>
      <h3 className=" text-md font-medium mt-2 px-5 text-center animate-[sliceUp_2s] delay-200">
        {userData?.descripcion}
      </h3>
    </div>
  );
}
