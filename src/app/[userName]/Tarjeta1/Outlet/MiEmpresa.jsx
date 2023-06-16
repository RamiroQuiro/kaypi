import SectionOutlet from "@/components/SectionOutlet";
import React from "react";

export default function MiEmpresa({ userDatos }) {
  console.log(userDatos);
  return (
    <section className="bg-gray-50 flex flex-col items-center justify-between h-full  w-full  relative">
      <div className=" pattern-diagonal-lines  pattern-primary-200 pattern-bg-transparent pattern-opacity-5 pattern-size-2 absolute top-0 left-0 w-full h-full"></div>
      <header 
       style={{
        background: `linear-gradient(to bottom,transparent,#F3F4F6) ${userDatos?.style?.heroTarget?.Color1}`,
      }}
      className="bg-white h-1/3 p-2 w-full relative clip-path-mypolygono  shadow-primary-100   flex flex-col  items-end justify-center text-2xl font-semibold capitalize">
        <h1>{userDatos?.datos?.nombreApellido}</h1>
      </header>
      <div  className="h-full pt-8  pl-8 p-5 relative bg-white/10">
        
        <p className="text- tracking-wider leading-">{userDatos?.secciones?.productoServicio}</p>
      </div>
    </section>
  );
}
