"use client"
import NavBarTarjeta from "@/components/NavBarTarjeta";
import HomeTarjeta from "./HomeTarjeta";
import { useState } from "react";
import RenderPaginas from "../RenderPaginas";

export default function SectionTarjetaSola({}) {
  
  const [selectBoton, setSelectBoton] = useState("");
  const selectorBotnes = (e) => {
    e.preventDefault();
    setSelectBoton(e.target.name);
  };


  return (
   
    <section className="bg-white border   rounded-lg overflow-hidden lg:w-[25vw] z-20  md:w-[35vw] w-full md:h-[95vh]  shadow-shadowCaja1 relative h-[98vh]  flex flex-col items-center justify-between ">
        <span className="absolute top-3 z-30 text-gray-200 text-sm text-thin"> RamiroCode | Web Developer </span>
       {/* <HomeTarjeta />  */}

       <RenderPaginas name={selectBoton} />
      <NavBarTarjeta  selectorBotones={selectorBotnes}/>
    </section>
   
  );
}


