"use client"
import React, { useEffect, useState } from "react";
import NavBarTarjeta from "../../components/NavBarTarjeta";
import DatosPerfil from "./DatosPerfil";
import ImagenPerfil from "./ImagenPerfil";
import LinksSquare from "./LinksSquare";

export default function SectionTarjetaSola({label}) {
  return (
    <section className="bg-white border capitalize rounded-lg lg:w-[30vw]  md:w-[50vw] w-full md:h-[90%] shadow-shadowCaja1 relative h-full z-20 flex flex-col items-center justify-between ">
      
      <div className="absolute top-0 lef-0 text-xs text-gray-600 capitalize z-50 font-semibold py-2 ">
        <span> RamiroCode | Web Developer </span>
      </div>
      <NavBarTarjeta/>

    </section>
  );
}
