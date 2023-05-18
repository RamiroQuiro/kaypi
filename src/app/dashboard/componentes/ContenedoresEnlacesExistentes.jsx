"use client";
import { useContextDatosUser } from "@/context/datosUser/contextoDatosUser";
import React from "react";
import ContenedorEnlace from "./ContenedorEnlace";
import { shallow } from "zustand/shallow";

export default function ContenedoresEnlacesExistentes() {
  const { enlaces } = useContextDatosUser((state) => ({
    enlaces: state.enlaces,
  }),shallow);
  console.log(enlaces)
  return (
    <div className="flex-auto md:px-4 lg:px-4  pt-10">
      {enlaces.map((link) => (
        <ContenedorEnlace
        key={link.id}
        link={link}
        />
      ))}
    </div>
  );
}
